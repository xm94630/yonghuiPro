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
        finish:12,
        total:32,
      },
      E:{
        finish:345,
        total:2345,
      },
      shop:{
        finish:12,
        total:23,
      },
    },
  
    lines:[
      {
        SKU:{
          finish:234,
          total:1222,
        },
        E:{
          finish:17,
          total:32,
        },
        shop:{
          finish:34,
          total:23,
        },
        shopState:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2], 
      },
      {
        SKU:{
          finish:55,
          total:438,
        },
        E:{
          finish:1,
          total:233,
        },
        shop:{
          finish:1,
          total:432,
        },
        shopState:[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,2], 
      }

    ]

    
  }

})

module.exports = router
