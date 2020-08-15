console.log('Exporting');
export default 23;

// .babelrc


// {
//     "preset": {
//         "env": {
//             "target": {
//                 "browers": [
//                     "last 5 versions",
//                     "ie >= 8"
//                 ]
//             }
//         }
//     }
// }







//package.json


// {
//     "name": "forkify",
//     "version": "1.0.0",
//     "description": "forkify project",
//     "main": "index.js",
//     "scripts": {
//         "dev": "webpack --mode development",
//         "build": "webpack --mode production",
//         "start": "webpack-dev-server --mode development"
//     },
//     "author": "Susmoy Sen Gupta",
//     "license": "ISC",
//     "dependencies": {
//         "babel-polyfill": "^6.26.0"
//     },
//     "devDependencies": {
//         "html-webpack-plugin": "^4.3.0",
//         "webpack": "^4.44.1",
//         "webpack-cli": "^3.3.12",
//         "webpack-dev-server": "^3.11.0"
//     }
// }







// webpack.config.js


// const path = require("path");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// module.exports = {
//     entry: ["babel-polyfill", "./src/js/index.js"],
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "js/bundle.js",
//     },
//     devServer: {
//         contentBase: "./dist",
//     },
//     plugins: [
//         new HtmlWebPackPlugin({
//             filename: "index.html",
//             template: "./src/index.html",
//         }),
//     ],
//     module: {
//         rules: [{
//             test: /\.js$/,
//             exclude: /node_modules/,
//             use: {
//                 loader: "babel-loader"
//             }
//         }]
//     }
// };