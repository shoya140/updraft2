const path = require('path');

module.exports = {
    context: path.resolve(__dirname, './app/assets/src'),
    entry: {
        index: './index.js'
    },

    output: {
        path: path.resolve(__dirname, './app/assets/_dist'),
        filename: '[name].js',
        publicPath: '/assets/_dist',
    },

    devServer: {
        contentBase: './app',
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader:'babel-loader',
                        options: {
                            presets: ["es2015"]
                        }
                    }
                ]
            }
        ]
    }

};
