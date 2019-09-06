module.exports = {
  entry: "./src/app.ts",
  output: {
    filename: "app.js",
    path: __dirname + "./dist/"
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [{ test: /\.ts$/, use: "awesome-typescript-loader" }]
  },
  devServer: {
    port: 3000
  }
};
