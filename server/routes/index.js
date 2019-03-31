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
        shopState:[{
          name:'绍兴店',
          state:0,
        },{
          name:'南京店',
          state:1,
        },{
          name:'北京店',
          state:2,
        },{
          name:'广州店',
          state:2,
        }], 
        lineName:'线路1'
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
        shopState:[{
          name:'大兴店',
          state:1,
        }],
        lineName:'线路2' 
        
      }

    ]

    
  }

})

//接口2
router.get('/epimetheus/api/diy/report/queryReportByCode/2', async (ctx, next) => {
  
  ctx.body = {

    total:{
  
      taskTotal:{
  
        SKU:888,
  
        E:8888,
  
      },
  
      finish:{
  
        SKU:888,
  
        E:8888,
  
      },
  
      unfinish:{
  
        SKU:888,
  
        E:8888,
  
      },
  
      abnormal :{
  
        SKU:888,
  
        E:8888,
  
      },
  
      pie:[200,200,300] //已完成、未完成、异常
  
    },
  
    DCReplenish:{
  
      taskTotal:{
  
        SKU:888,
  
        E:8888,
  
      },
  
      finish:{
  
        SKU:888,
  
        E:8888,
  
      },
  
      unfinish:{
  
        SKU:888,
  
        E:8888,
  
      },
  
      abnormal :{
  
        SKU:888,
  
        E:8888,
  
      },
  
  pie:[500,100,700] //已完成、未完成、异常
  
    },
  
    AGVPicking:{
  
      taskTotal:{
  
        SKU:888,
  
        E:8888,
  
      },
  
      finish:{
  
        SKU:888,
  
        E:8888,
  
      },
  
      unfinish:{
  
        SKU:888,
  
        E:8888,
  
      },
  
      abnormal :{
  
        SKU:888,
  
        E:8888,
  
      },
  
  pie:[100,200,300] //已完成、未完成、异常
  
    },
  
    DCPicking:{
  
      taskTotal:{
  
        SKU:888,
  
        E:8888,
  
      },
  
      finish:{
  
        SKU:888,
  
        E:8888,
  
      },
  
      unfinish:{
  
        SKU:888,
  
        E:8888,
  
      },
  
      abnormal :{
  
        SKU:888,
  
        E:8888,
  
      },
  
       pie:[100,200,300] //已完成、未完成、异常
  
    },
  
  }

})

//接口3
router.get('/epimetheus/api/diy/report/queryReportByCode/3', async (ctx, next) => {
  
  ctx.body = {

    total:{
  
      data:{
  
        title: {
  
          text: '当日拣货任务汇总',
  
          subtext: ''
  
        },
  
        xAxis:{
  
          data:['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
  
        },
  
        series:[
  
          {
  
            name:'2011',
  
            data:[10, 52, 200, 334, 390, 330, 220],
  
          },
  
          {
  
            name:'2012',
  
            data:[10, 52, 200, 334, 390, 330, 220],
  
          }
  
        ]
  
      }
  
    },
  
    people:{
  
      name:"人工拣货每人拣货量",
  
      data:{
  
        title: {
  
          text: '当日拣货任务汇总',
  
          subtext: ''
  
        },
  
        xAxis:{
  
          data:['甲', '乙', '丙', '丁', '甲', '甲', '甲'],
  
        },
  
        series:[
  
          {
  
            name:'2011',
  
            data:[10, 52, 200, 334, 390, 330, 220],
  
          },
  
          {
  
            name:'2012',
  
            data:[10, 52, 200, 334, 390, 330, 220],
  
          }
  
        ]
  
      }
  
    },
  
    AGV:{
  
      name:"AGV每工位拣货量",
  
      data:{
  
        title: {
  
          text: '当日拣货任务汇总',
  
          subtext: ''
  
        },
  
        xAxis:{
  
          data:['工作站1', '工作站2', '工作站3', '工作站4', '工作站5', '工作站6', '工作站7'],
  
        },
  
        series:[
  
          {
  
            name:'2011',
  
            data:[1000, 52, 200, 334, 390, 330, 220],
  
          },
  
          {
  
            name:'2012',
  
            data:[10, 52, 200, 334, 390, 330, 220],
  
          }
  
        ]
  
      }
  
    },
  
  }

})

module.exports = router
