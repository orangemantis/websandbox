var browserSync = require('browser-sync-webpack-plugin');
var path = require('path');
var browserSyncPlugin = new browserSync({
    host: 'localhost',
    port: 8081,//handles browser sync
    proxy: 'http://localhost:8080',//served from webpack server
    reload: false
});

var config = {
    entry: path.resolve(__dirname, 'app/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
            test: /\.css$/,
            loader: 'style!css'
        },
        {
            test: /.js$/,
            loader: 'babel-loader',
            include: [path.resolve(__dirname, 'app/js')],
            query: {
                presets: ['es2015']
            }
        }
    ]
    },
    plugins: [
        browserSyncPlugin
    ]
};

module.exports = config;
