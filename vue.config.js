module.exports={

    //baseUrl:"http://172.16.28.46:9090", //后端环境接口地址（和后端联调、真实上线的时候可以配置）
    baseUrl:"",                           //前端vue的服务地址

    runtimeCompiler:true,
    configureWebpack: {
        devServer: {
            proxy: {
                '/epimetheus/api': {

                    target: 'http://localhost:3000/',       //前端代理目标地址（通常是 3000端口 的koa服务，方便前端自己调试）
                    //target: 'http://172.16.28.46:9090',   //后端接口地址   （解决和后端联调的跨域问题，暂时用不到，因为后端直接设置了允许跨域的请求头）
                    
                    //pathRewrite: {'^/api' : ''},      
                    //changeOrigin: true,                   // target是域名的话，需要这个参数
                    secure: false,                          // 设置支持https协议的代理
                  },
            }
        }
    }
}