const path = require('path');

module.exports = {
    context: path.resolve(__dirname, './app/assets/src'),
    entry: './app.js',

    output: {
        path: path.resolve(__dirname, './app/assets/_dist'),
        filename: 'main.js',
        publicPath: '/assets/_dist',
    },

    devServer: {
        contentBase: './app',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ["es2015"]
                },
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader',
            }
        ]
    }

};
