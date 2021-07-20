const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;


function addImagemin(){
    if(isProd){
        config.plugins.push(new ImageminWebpackPlugin({
            test: /\.(png|svg|jpg|jpeg|gif)$/i
        }));
    }
}


const config = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isDev ? 'js/script.js' : 'js/script-[hash].js',
    },
    devtool: isDev ? 'source-map' : false,
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: isDev ? 'images/[name][ext]' : 'images/[name]-[hash][ext]',
                },
            },
            {
                test: /\.svg$/i,
                type: 'asset/resource',
                generator: {
                    filename: isDev ? 'images/svg/[name][ext]' : 'images/svg/[name]-[hash][ext]'
                },
            },
            {
                test: /\.(ttf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: isDev ? 'fonts/[name][ext]' : 'fonst/[name]-[hash][ext]'
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: isProd ? 'css/styles-[hash].css' : 'css/style.css',
        })
    ],
};

addImagemin();

module.exports = config;