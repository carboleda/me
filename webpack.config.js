const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundel.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            file: './index.html'
        }),
        new FaviconsWebpackPlugin({
            logo: './public/icon.png',
            prefix: 'assets/',
            inject: true,
            background: '#fff',
            title: 'CV - Carlos Fernando Arboleda Garcés',
            icons: {
                android: true,
                appleIcon: true,
                favicons: true,
                opengraph: false,
                twitter: false,
            }
        })
    ]
}