module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "build/bundle.js"
    },
    resolve: {
      extensions: ['', '.js'],
      path: __dirname
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
