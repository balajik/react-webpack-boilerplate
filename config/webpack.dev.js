const path = require("path");

module.exports = {
  mode: "development",
  devtool: false,
  devServer: {
    static: path.resolve(__dirname, "..", "./build"),
    hot: true,
    port: 8080,
    open: true,
    compress: true
  }
};
