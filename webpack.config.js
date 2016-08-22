module.exports = {
    devtool: 'source-map',
    entry: './src/client/index.js',
    output: {
        path: './public',
        filename: 'bundle.js'       
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json'] 
    }
};