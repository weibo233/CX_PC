module.exports = {
    devServer: {
        disableHostCheck: true,
        proxy: {
            //配置跨域
            '/api': {
                target: "http://139.224.234.237:3000/api",
                ws:true,
                changOrigin:true,
                pathRewrite:{
                    '^/api':'/'
                }
            }
        }
    }
}