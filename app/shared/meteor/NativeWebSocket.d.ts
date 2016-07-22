interface NativeWebSocketOptions {
    protocols?: string[];
    browser?: boolean; // ??
    timeout?: number;
    headers?: string; // ??
}

type EventType = 'message' | 'open' | 'close' | 'error';

declare const enum State {
    NOT_YET_CONNECTED = -1,
    CONNECTING,
    OPEN,
    CLOSING,
    CLOSED
}

interface NativeWebSocket {
    new (url: string, options: NativeWebSocketOptions): NativeWebSocket;
    on(event:EventType, callback: Function, thisArg?: Object): void;
    off(event:EventType, callback: Function): void;
    addEventListener(event:EventType, callback: Function, thisArg: Object): void;
    removeEventListener(event:EventType, callback: Function): void;
    open(): void;
    close(code: number, message: string): void;
    send(message: string): boolean;
    state(): State;
    isOpen(): boolean;
    isClosing(): boolean;
    isConnecting(): boolean;

}