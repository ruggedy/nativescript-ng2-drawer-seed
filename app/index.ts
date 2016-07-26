// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from 'nativescript-angular/application';
import {nsMeteorInit, NS_METEOR_PROVIDERS} from 'nativescript-ng2-meteor';
nsMeteorInit({
    url: 'http://192.168.1.226:3000',
    debug: true
});
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
        NS_METEOR_PROVIDERS
    ],
    {
        "cssFile": "app.style.css"
    }
);
