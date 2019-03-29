const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})


//接口1
router.get('/epimetheus/api/diy/report/queryReportByCode', async (ctx, next) => {
  
  //页面1接口
  ctx.body = {

    total:{
      rate:{data:0.5},
      SKU:{
        finish:8888,
        total:8888,
      },
      E:{
        finish:8888,
        total:8888,
      },
      shop:{
        finish:8888,
        total:8888,
      },
    },
  
    lines:[
      {
        SKU:{
          finish:222,
          total:222,
        },
        E:{
          finish:222,
          total:222,
        },
        shop:{
          finish:222,
          total:222,
        },
        shopState:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2], 
      },
      {
        SKU:{
          finish:222,
          total:333,
        },
        E:{
          finish:222,
          total:233,
        },
        shop:{
          finish:222,
          total:222,
        },
        shopState:[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,2], 
      }

    ]

    
  }

})

module.exports = router
