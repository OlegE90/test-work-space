const {resolve} = require('path');


module.exports = (env) => ({
    context: resolve('src'),
    entry: './main.js',
    output: {
        path: resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    devtool: env.prod ? 'source-map' : 'eval'
});
