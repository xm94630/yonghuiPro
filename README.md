# 开发环境部署
### 前端vue服务
1）进入项目根目录执行 yarn 安装依赖库
2）npm run serve 起vue服务（http://localhost:8080）
### 后端koa服务
1）进入server文件夹，执行 yarn 命令安装依赖库
2）npm run dev 起koa服务，提供模拟接口（http://localhost:3000）

# webpack 代理设置
1）进入 vue.config.js 对 proxy 部分进行配置，将接口代理到  http://localhost:3000 （前端模拟接口所在）
2）通常，这部分工作已经配置好了。

# 打包
1）配置 src 文件下config.js 中的 baseUrl ，指定上线的服务器地址
2）npm run build 





# my-pro

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
