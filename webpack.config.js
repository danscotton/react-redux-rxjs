const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    stats: 'verbose',
    entry: [
        'webpack-hot-middleware/client',
        './app',
    ],
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            components: path.resolve(__dirname, 'app/components')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
        }),
        new HotModuleReplacementPlugin()
    ]
};
