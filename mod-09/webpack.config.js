var webpack = require('webpack');

module.exports = {
    entry: './demo.js',
    output: {
        filename: './demo.bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: false,
    }})
    ]
}