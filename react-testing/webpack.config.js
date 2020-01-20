const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

/** @const {webpack.Configuration} */
const config = {
  name: "client",
  target: "web",
  entry: path.resolve(__dirname, "./src/index.tsx"),

  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".ts", ".tsx", ".mjs", ".js", ".json", ".scss"]
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(mjs|jsx?)$/,
        use: "babel-loader"
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", { loader: "ts-loader" }]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              namedExport: true
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [new HtmlWebpackPlugin()]
};

module.exports = () => config;
