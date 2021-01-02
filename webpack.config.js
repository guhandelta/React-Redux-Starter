const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    // Webpack will take all the app files and compress it into app.js---
    filename: "app.js",
    // ---and place it in /dist
    path: path.resolve(__dirname, "dist")
  },
  // Webpack Dev Server - Lighweight Server | Instructing it to launch the app on :3000, from /dist
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000
  },
  mode: "development"
};
