import {Injectable} from '@angular/core';
import {Observer, Observable, Subject, Subscription} from 'rxjs';
let NativeWebSocket:NativeWebSocket = require('nativescript-websockets');
let Mongo = require('minimongo-standalone');

@Injectable()
export default class WsClient {

    private _socket:NativeWebSocket;
    private _subject:Subject<any>;
    private _subHandle: Subscription;

    constructor(url:string, options:NativeWebSocketOptions, openObserver:Observer<any>) {
        // instantiate websocket class
        this._socket = new NativeWebSocket(url, options);
        // init socket suject
        this._subject = new Subject();
        // if a openObserver has been provided notify on socket open
        if (openObserver) {
            this._socket.on('open', (data) => {
                openObserver.next(data);
                openObserver.complete();
            });
        }
        // subscribe observer for send operations
        this._subHandle = this._subject.subscribe((data) => {
            if (this._socket.isOpen()) {
                this._socket.send(data);
            }
        });
    }

    send(data): void {
       this._subject.next(data);
    }

    subscribe(observer:Observer<any>) {
        this._socket.on('message', (data) => {
            observer.next(data);
        });

        this._socket.on('error', (error) => {
            observer.error(error);
        });

        this._socket.on('close', () => {
           observer.complete();
        });
    }


}