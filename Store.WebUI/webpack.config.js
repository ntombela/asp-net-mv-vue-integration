const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        'layout': './scripts/views/src/shared/layout.js',
        'home.index': './scripts/views/src/home/home.index.js'
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, './scripts/views/', 'dist')
    },
    resolve: {
        modules: ['../node_modules']
    },
    devtool: 'source-map',
    mode: 'development',
    watch: true,
    module: {
        rules: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
};