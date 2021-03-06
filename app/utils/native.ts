const application = require('application');
const platform = require('platform');
import {Color} from 'color';

const android = application.android;

export class StatusBar {

    static setColor(hexcode: string):void {

        if (android) {
            android.onActivityStarted = () => {

                if (platform.device.sdkVersion >= '21') {
                    var window = application.android.startActivity.getWindow();
                    window.setStatusBarColor(new Color(hexcode).android);
                }
            };
        }
    }
}
