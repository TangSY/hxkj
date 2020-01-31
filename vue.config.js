/**
 * @Description:    webpack自定义配置
 * @Author:         TSY
 * @Email:          t@tsy6.com
 * @CreateDate:     2019/3/31 11:56
 */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    productionSourceMap: false,//生产环境中关掉sourceMap
    baseUrl: './',
    devServer: {
        port: 80,
        proxy: {
            '/api': {
                // target: 'http://hxkj.vip/',//设置调用的接口域名和端口号
                target: 'http://localhost:3000/',//设置调用的接口域名和端口号
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true,
                    },
                },
                sourceMap: false,
                parallel: true
            }))
        }
    }
}