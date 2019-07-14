/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.svg$/,
                include: [path.join(__dirname, "src/assets")],
                loader: "file-loader"
            },
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: true},
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
