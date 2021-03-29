let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin")
let MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports= {
   entry: "./src/main.js",

   output: {
      path: path.resolve(__dirname,"dist"),
      filename: "main.js"
   },

   module: {
      rules:[
         {
            test:/.js$/i,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },

         {
            test: /\.css$|\.scss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
         },

      ]
   },

   plugins:[
      new HtmlWebpackPlugin ({
         template: "./src/templates/index.html",
         filename :"index.html",
         inject: true,
      }),

      new MiniCssExtractPlugin()
   ]
}