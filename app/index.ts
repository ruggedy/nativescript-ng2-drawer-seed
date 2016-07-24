// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from 'nativescript-angular/application';
require('./shared/meteor/meteor-client-side.bundle.js');
// angular2 and nativescript
import {RouterOutletMap} from '@angular/router';
import {NS_ROUTER_PROVIDERS} from 'nativescript-angular/router';
// telerik UI
import {SIDEDRAWER_PROVIDERS} from 'nativescript-telerik-ui/sidedrawer/angular';
import {TNSFontIconService} from 'nativescript-ng2-fonticon';

// app
import {AppComponent} from './app.component';
import {APP_ROUTES_PROVIDER} from './app.routes';

import * as native from './utils/native';

native.StatusBar.setColor('#388e3c');

import {IterableDiffers} from '@angular/core';
import {MongoCursorDifferFactory} from './shared/meteor/mongo_cursor_differs';
import {defaultIterableDiffers} from '@angular/core/src/change_detection/change_detection';

let factories = defaultIterableDiffers.factories;
if (factories) {
    factories.push(new MongoCursorDifferFactory());
}

nativeScriptBootstrap(
    AppComponent,
    [
        APP_ROUTES_PROVIDER,
        NS_ROUTER_PROVIDERS,
        RouterOutletMap,
        SIDEDRAWER_PROVIDERS,
        {
            provide: TNSFontIconService,
            useFactory: () => {
                return new TNSFontIconService({
                    'fa': 'fonts/font-awesome.css'
                });
            }
        },
        {
            provide: IterableDiffers,
            useValue: new IterableDiffers(factories)
        }
    ],
    {
        "cssFile": "app.style.css"
    }
);
