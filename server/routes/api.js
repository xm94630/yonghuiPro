const router = require('koa-router')()

router.prefix('/api')

router.get('/json', function (ctx, next) {
  ctx.body = {
    title: '(我是数据)'
  }
})


module.exports = router
