var bundler = require("nativescript-dev-webpack"),
    path = require('path'),
    webpack = require('webpack');

var config = bundler.getConfig({});
config.resolveLoader = {
    alias: {
        html: path.join(__dirname, 'node_modules', 'html-loader'),
        file: path.join(__dirname, 'node_modules', 'file-loader'),
        css: path.join(__dirname, 'node_modules', 'css-loader'),
        url: path.join(__dirname, 'node_modules', 'url-loader')
    }
};
/*
config.entry = {
    "bundle": "./index.js",
    "vendor": [
        '@angular/core',
        '@angular/router',
        'nativescript-angular/application',
        'nativescript-angular/router',
        'nativescript-telerik-ui/sidedrawer/angular'
    ],
    "tns-java-classes": "./tns-java-classes"
};
*/
config.module = {
    loaders: [{
        test: /\.ttf$/,
        loader: 'file?name=[path][name].[ext]'
    },{
        test: /\.html$/,
        loader: 'html'
    },{
        test: /\.css$/,
        loader: 'file?name=[path][name].[ext]'
    }]
};
//config.plugins.splice(1, 0, new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"));
//console.log(JSON.stringify(config, null, 4));
//console.log(JSON.stringify(config.plugins[2], null, 4));
module.exports = config;
