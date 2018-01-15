const {resolve} = require('path');


module.exports = (env) => ({
    context: resolve('src'),
    entry: './main.jsx',
    output: {
        path: resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    } ,
    devtool: env.prod ? 'source-map' : 'eval',
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react'],
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    }
    
});
