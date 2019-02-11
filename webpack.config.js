const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const mode = "production";

module.exports = {
  mode: mode,
  entry: {
    app: path.join(__dirname, "/src/index.js")
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true
  },
  devtool: mode === "production" ? "" : "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Output Management"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: mode !== "production" ? "[name].css" : "[name].[hash].css",
      chunkFilename: mode !== "production" ? "[id].css" : "[id].[hash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
      //   {
      //     test: /\.m?js$/,
      //     exclude: /(node_modules|bower_components)/,
      //     use: {
      //       loader: "babel-loader",
      //       options: {
      //         presets: ["@babel/preset-env"],
      //         plugins: ["transform-es2015-modules-commonjs"]
      //       }
      //     }
      //   },
    ]
  }
};
