const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            { 
                test: /\.tsx?$/, 
                loader: "awesome-typescript-loader" 
            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", "ts", "tsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};