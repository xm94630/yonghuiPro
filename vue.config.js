module.exports={
    runtimeCompiler:true,
    configureWebpack: {
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://localhost:3000/',
                    pathRewrite: {'^/api' : ''},
                    changeOrigin: true,     // target是域名的话，需要这个参数
                    secure: false,          // 设置支持https协议的代理
                  },
            }
        }
    }
}