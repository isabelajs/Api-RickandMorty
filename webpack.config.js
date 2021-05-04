let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin")
let MiniCssExtractPlugin = require("mini-css-extract-plugin")
const copyPlugin = require('copy-webpack-plugin')


module.exports= {
   entry: "./src/main.js",

   output: {
      path: path.resolve(__dirname,"docs"),
      filename: "main.js"
   },

   module: {
      rules:[
         {
            test: /\.css$|\.scss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
         },

         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         }

      ]
   },

   plugins:[
      new HtmlWebpackPlugin ({
         template: "./src/templates/index.html",
         filename :"index.html",
         inject: true,
      }),

      new MiniCssExtractPlugin({
         filename: "style.css"
      }),

      new copyPlugin({
         patterns: [
            {
               from: path.resolve(__dirname,"src","assets/img"), //copiar todas las imagenes de assets
               to: "assets/img"
            }
         ]
      }),

   ]
}