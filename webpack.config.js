module.exports = {
    mode:'development',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    //will use .babelrc
                    loader:'babel-loader'
                }
            }
        ]
    }
}