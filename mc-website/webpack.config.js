const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const os = require('os')
function resolve(dir) {
    return path.join(__dirname, dir)
}

// 动态获取 host
let arr = []
let HOST
for (let key in os.networkInterfaces()) {
  os.networkInterfaces()[key].forEach((item) => {
    if (item.family === 'IPv4' && item.address.indexOf('192.168.') !== -1) {
      arr.push(item.address)
    }
  })
}
HOST = arr[0]


module.exports={
    entry:{
        entry:'./src/src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },{
                test:/\.(png|jpg|gif)/ ,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:5000,
                        outputPath:'images/'
                    }
                }]
             },{
                test: /\.html$/,
                loader: 'html-loader'
            },{
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            },
        ]
    },
    plugins:[
        new htmlPlugin({
            hash:true,
            template:'./src/index.html',
            minify: {
                caseSensitive: false,
                removeComments: true,
                removeEmptyAttributes: true,
                collapseWhitespace: true
            }
        })
    ],
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        host: HOST,
        compress: true,
        open: true,
        port: 9090
    },
    resolve:{

    　　extensions: ['.js', '.json'],
    　　alias: {
        　　'@': resolve('src'),
        　　'bootstrap':resolve('./lib/bootstrap-3.3.7'),
    　　}
    }
}