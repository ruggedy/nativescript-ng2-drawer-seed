var bundler = require("nativescript-dev-webpack"),
    path = require('path');

var config = bundler.getConfig({});
config.resolveLoader = {
    alias: {
        html: path.join(__dirname,'node_modules', 'html-loader')
    }
}
module.exports = config;
