// Тут буде об'єкт з налаштуваннями

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //  вхід
    entry: './src/index.js',
    // вихід
    output: {
       path: path.resolve(__dirname, 'build'),
       filename: ' my bundle.js',
    },

    //  Об'єкт загружчика
    module: {
      rules: [
        {
        test: /\.scss$/i,
       
        use: [
          'style-loader',
         MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
    },

    //  Плагіни
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' }),
      new MiniCssExtractPlugin({filename: 'styles.css'}),
   ], 


    // devServer: {
    //   port: 4444,
    //   open: true,
    //   stats: 'errors-only',
      
    // },
};
