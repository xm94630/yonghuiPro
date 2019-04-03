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

    total: {
      rate: { data: 0.5 },
      SKU: {
        finish: 12,
        total: 32,
      },
      E: {
        finish: 345,
        total: 2345,
      },
      shop: {
        finish: 12,
        total: 23,
      },
    },

    lines: [
      {
        SKU: {
          finish: 234,
          total: 1222,
        },
        E: {
          finish: 17,
          total: 32,
        },
        shop: {
          finish: 34,
          total: 23,
        },
        shopState: [{
          name: '绍兴店',
          state: 0,
        }, {
          name: '南京店',
          state: 1,
        }, {
          name: '北京店',
          state: 2,
        }, {
          name: '广州店',
          state: 2,
        }],
        lineName: '线路1'
      },
      {
        SKU: {
          finish: 55,
          total: 438,
        },
        E: {
          finish: 1,
          total: 233,
        },
        shop: {
          finish: 1,
          total: 432,
        },
        shopState: [{
          name: '大兴店',
          state: 1,
        }],
        lineName: '线路2'

      }

    ]


  }

})

//接口2
router.get('/epimetheus/api/diy/report/queryReportByCode/2', async (ctx, next) => {

  ctx.body = {

    total: {

      taskTotal: {

        SKU: 10,

        E: 22,

      },

      finish: {

        SKU: 1,

        E: 2,

      },

      unfinish: {

        SKU: 3,

        E: 4,

      },

      abnormal: {

        SKU: 5,

        E: 6,

      },

      pie: [100, 200, 300] //已完成、未完成、异常

    },

    DCReplenish: {

      taskTotal: {

        SKU: 2,

        E: 3,

      },

      finish: {

        SKU: 888,

        E: 8888,

      },

      unfinish: {

        SKU: 888,

        E: 8888,

      },

      abnormal: {

        SKU: 888,

        E: 8888,

      },

      pie: [500, 100, 700] //已完成、未完成、异常

    },

    AGVPicking: {

      taskTotal: {

        SKU: 888,

        E: 8888,

      },

      finish: {

        SKU: 888,

        E: 8888,

      },

      unfinish: {

        SKU: 888,

        E: 8888,

      },

      abnormal: {

        SKU: 888,

        E: 8888,

      },

      pie: [100, 200, 300] //已完成、未完成、异常

    },

    DCPicking: {

      taskTotal: {

        SKU: 888,

        E: 8888,

      },

      finish: {

        SKU: 888,

        E: 8888,

      },

      unfinish: {

        SKU: 888,

        E: 8888,

      },

      abnormal: {

        SKU: 888,

        E: 8888,

      },

      pie: [100, 200, 300] //已完成、未完成、异常

    },

  }

})

//接口3
router.get('/epimetheus/api/diy/report/queryReportByCode/3', async (ctx, next) => {

  ctx.body = {

    total: {

      data: {

        title: {

          text: '当日拣货任务汇总',

          subtext: ''

        },

        xAxis: {

          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],

        },

        series: [

          {

            name: '2011',

            data: [10, 52, 200, 334, 390, 330, 220],

          },

          {

            name: '2012',

            data: [10, 52, 200, 334, 390, 330, 220],

          }

        ]

      }

    },

    people: {

      name: "人工拣货每人拣货量",

      data: {

        title: {

          text: '当日拣货任务汇总',

          subtext: ''

        },

        xAxis: {

          data: ['甲', '乙', '丙', '丁', '甲', '甲', '甲'],

        },

        series: [

          {

            name: '2011',

            data: [10, 52, 200, 334, 390, 330, 220],

          },

          {

            name: '2012',

            data: [10, 52, 200, 334, 390, 330, 220],

          }

        ]

      }

    },

    AGV: {

      name: "AGV每工位拣货量",

      data: {

        title: {

          text: '当日拣货任务汇总',

          subtext: ''

        },

        xAxis: {

          data: ['工作站1', '工作站2', '工作站3', '工作站4', '工作站5', '工作站6', '工作站7'],

        },

        series: [

          {

            name: '2011',

            data: [1000, 52, 200, 334, 390, 330, 220],

          },

          {

            name: '2012',

            data: [10, 52, 200, 334, 390, 330, 220],

          }

        ]

      }

    },

  }

})



//最后确定的接口形式
router.post('/epimetheus/api/diy/report/querySingleReportByCode/', async (ctx, next) => {
  let obj = null;


  //页面1
  if ("totalProgress" == ctx.request.query.code) {
    //总体进度
    obj = {
      "data": Math.random(),
    }
  }
  if ("total-SKU" == ctx.request.query.code) {
    //总体SKU
    obj = {
      "total": Math.round(Math.random()*1000),
      "finish": Math.round(Math.random()*1000),
    }
  }
  if ("total-E" == ctx.request.query.code) {
    //总体E数
    obj = {
      "total": Math.round(Math.random()*1000),
      "finish": Math.round(Math.random()*1000),
    }
  }
  if ("total-Shop" == ctx.request.query.code) {
    //门店
    obj = {
      "total": Math.round(Math.random()*1000),
      "finish": Math.round(Math.random()*1000),
    }
  }
  if ("lines" == ctx.request.query.code) {
    //lines
    obj = [{
      "priority": 30,
      "SKU": {
        "total": Math.round(Math.random()*1000),
        "finish": Math.round(Math.random()*1000),
      },
      "E": {
        "total": Math.round(Math.random()*1000),
        "finish": Math.round(Math.random()*1000),
      },
      "shop": {
        "total": Math.round(Math.random()*1000),
        "finish": Math.round(Math.random()*1000),
      },
      "shopState": [{
        "name": "绍兴店",
        "state": 1
      }, {
        "name": "永辉生活台儿庄路店YH9DHW 3-19",
        "state": 2
      }, {
        "name": "永辉生活三门支路店YH9DI4 3-10",
        "state": 0
      }, {
        "name": "永辉生活新松江路店YH9DIR 6-12",
        "state": 0
      }, {
        "name": "永辉上海静安区--永辉生活新疆路店9DJA 2-2",
        "state": 0
      }, {
        "name": "永辉生活武威东路店 9DEE 2-11",
        "state": 0
      }, {
        "name": "永辉生活松兰路店9DEK 5-16",
        "state": 0
      }, {
        "name": "永辉生活罗秀路店9DEU 6-19",
        "state": 0
      }, {
        "name": "永辉生活环林东路YH9DGI 2-12",
        "state": 0
      }, {
        "name": "永辉生活黄兴路店9DFI 3-7",
        "state": 0
      }, {
        "name": "永辉生活梅园路店9DEH 电梯口",
        "state": 0
      }, {
        "name": "永辉生活浦东大道店 9DF2 1-14",
        "state": 0
      }, {
        "name": "永辉生活平城路店9DFC 电梯口",
        "state": 0
      }, {
        "name": "永辉生活梅岭北路店YH9DGA 2-14",
        "state": 0
      }, {
        "name": "永辉生活青松路店YH9DHL 6-3",
        "state": 0
      }, {
        "name": "永辉生活城中路店YH9DGP 电梯口",
        "state": 0
      }, {
        "name": "永辉生活芳华路店YH9DHK 2-18",
        "state": 0
      }, {
        "name": "永辉生活本溪路店YH9DIQ 4-10",
        "state": 0
      }, {
        "name": "苏州--永辉生活9DIY星湖街店6-10",
        "state": 0
      }, {
        "name": "永辉生活沁春路店YH9DI7 2-10",
        "state": 0
      }, {
        "name": "-永辉生活银都路 9DED 电梯口",
        "state": 0
      }, {
        "name": "永辉生活双阳路店9DFE 3-9",
        "state": 0
      }, {
        "name": "永辉生活云清路店9DG2 6-9",
        "state": 0
      }, {
        "name": "永辉生活外婆泾店YH9DGD 6-8",
        "state": 0
      }, {
        "name": "永辉生活涞坊路店YH9DGE 电梯口",
        "state": 0
      }, {
        "name": "苏州永辉生活东沙湖路店6-6",
        "state": 0
      }, {
        "name": "永辉生活罗锦路店YH9DGN 6-17",
        "state": 0
      }, {
        "name": "苏州永辉生活9DHS东沈浒路店6-7",
        "state": 0
      }, {
        "name": "永辉生活泽普路店YH9DJ6 1-1",
        "state": 0
      }, {
        "name": "苏州永辉生活9DEC王天井巷店6-4",
        "state": 0
      }, {
        "name": "永辉生活淮阴路店9DFA 1-10",
        "state": 0
      }, {
        "name": "苏州--永辉生活9DFG新未来花园店6-9",
        "state": 0
      }]
    }, {
      "priority": 40,
      "SKU": {
        "total": 146,
        "finish": 0
      },
      "E": {
        "total": 492,
        "finish": 0
      },
      "shop": {
        "total": 12,
        "finish": 0
      },
      "shopState": [{
        "name": "永辉生活 9DBW灵山路店 1-12",
        "state": 0
      }, {
        "name": "永辉生活梅陇城广场店9DCT 6-18",
        "state": 0
      }, {
        "name": "永辉生活9DBX杨思路店 6-12",
        "state": 0
      }, {
        "name": "永辉生活栖山路店9DCP 3-18",
        "state": 0
      }, {
        "name": "永辉生活牡丹江路店9DDG 5-19",
        "state": 0
      }, {
        "name": "永辉生活宛平南路店9DDH 4-15",
        "state": 0
      }, {
        "name": "苏州永辉生活9DCS赛格又一城6-1",
        "state": 0
      }, {
        "name": "永辉生活五星路店9DCJ 2-17",
        "state": 0
      }, {
        "name": "苏州永辉生活9DCR南环大街店6-2",
        "state": 0
      }, {
        "name": "永辉上海闵行区--永辉生活红松路店9DBZ 1-8",
        "state": 0
      }, {
        "name": "永辉生活世界路店 9DCD 3-4",
        "state": 0
      }, {
        "name": "永辉生活青湖路店9DCE 6-5",
        "state": 0
      }]
    }, {
      "priority": 50,
      "SKU": {
        "total": 263,
        "finish": 0
      },
      "E": {
        "total": 1011,
        "finish": 0
      },
      "shop": {
        "total": 24,
        "finish": 0
      },
      "shopState": [{
        "name": "永辉生活申北路店9DDW 电梯口",
        "state": 0
      }, {
        "name": "永辉生活秀泉路店 9DE4 6-6",
        "state": 0
      }, {
        "name": "永辉生活城中东路店 9DE5 6-4",
        "state": 0
      }, {
        "name": "永辉生活南其昌路店9DE8 6-14",
        "state": 0
      }, {
        "name": "永辉生活弘翔路店YH9DJF 6-13",
        "state": 0
      }, {
        "name": "永辉上海超级物种YH9I47七宝宝龙店 电梯口",
        "state": 0
      }, {
        "name": "永辉生活玉屏南路店YH9DJB 1-13",
        "state": 0
      }, {
        "name": "永辉生活中华新路店YH9DK5 4-15",
        "state": 0
      }, {
        "name": "永辉上海超级物种梅陇中庚店9I57 电梯口",
        "state": 0
      }, {
        "name": "永辉生活远洋香奈店9DDK 5-18",
        "state": 0
      }, {
        "name": "永辉生活洪德路店9DE7 电梯口",
        "state": 0
      }, {
        "name": "永辉上海虹口区--通州路店 9DL6 2-1",
        "state": 0
      }, {
        "name": "永辉上海宝山区--永辉生活水产路店9DJX 2-3",
        "state": 0
      }, {
        "name": "永辉生活沙浦路店9DDY 5-15",
        "state": 0
      }, {
        "name": "永辉生活青安路店YH9DJQ 6-2",
        "state": 0
      }, {
        "name": "永辉生活万立城店YH9DJT 1-2",
        "state": 0
      }, {
        "name": "永辉生活9DJ城市公馆店 电梯口",
        "state": 0
      }, {
        "name": "苏州永辉生活9DEC王天井巷店6-4",
        "state": 0
      }, {
        "name": "永辉生活樱花路店YH9DJY 6-18",
        "state": 0
      }, {
        "name": "苏州--永辉生活YH9DK9九华路店6-8",
        "state": 0
      }, {
        "name": "永辉生活9DKA鹤庆路店 电梯口",
        "state": 0
      }, {
        "name": "永辉生活俱进路店YH9DKB 1-16",
        "state": 0
      }, {
        "name": "永辉环镇北路店9DKL 1-6",
        "state": 0
      }, {
        "name": "永辉生活芙蓉江路店YH9DK7 1-5",
        "state": 0
      }]
    },
    {
      "priority": 30,
      "SKU": {
        "total": 204,
        "finish": 0
      },
      "E": {
        "total": 713,
        "finish": 0
      },
      "shop": {
        "total": 32,
        "finish": 0
      },
      "shopState": [{
        "name": "永辉生活严桥路店YH9DH8 2-19",
        "state": 0
      }, {
        "name": "永辉生活台儿庄路店YH9DHW 3-19",
        "state": 0
      }, {
        "name": "永辉生活三门支路店YH9DI4 3-10",
        "state": 0
      }, {
        "name": "永辉生活新松江路店YH9DIR 6-12",
        "state": 0
      }, {
        "name": "永辉上海静安区--永辉生活新疆路店9DJA 2-2",
        "state": 0
      }, {
        "name": "永辉生活武威东路店 9DEE 2-11",
        "state": 0
      }, {
        "name": "永辉生活松兰路店9DEK 5-16",
        "state": 0
      }, {
        "name": "永辉生活罗秀路店9DEU 6-19",
        "state": 0
      }, {
        "name": "永辉生活环林东路YH9DGI 2-12",
        "state": 0
      }, {
        "name": "永辉生活黄兴路店9DFI 3-7",
        "state": 0
      }, {
        "name": "永辉生活梅园路店9DEH 电梯口",
        "state": 0
      }, {
        "name": "永辉生活浦东大道店 9DF2 1-14",
        "state": 0
      }, {
        "name": "永辉生活平城路店9DFC 电梯口",
        "state": 0
      }, {
        "name": "永辉生活梅岭北路店YH9DGA 2-14",
        "state": 0
      }, {
        "name": "永辉生活青松路店YH9DHL 6-3",
        "state": 0
      }, {
        "name": "永辉生活城中路店YH9DGP 电梯口",
        "state": 0
      }, {
        "name": "永辉生活芳华路店YH9DHK 2-18",
        "state": 0
      }, {
        "name": "永辉生活本溪路店YH9DIQ 4-10",
        "state": 0
      }, {
        "name": "苏州--永辉生活9DIY星湖街店6-10",
        "state": 0
      }, {
        "name": "永辉生活沁春路店YH9DI7 2-10",
        "state": 0
      }, {
        "name": "-永辉生活银都路 9DED 电梯口",
        "state": 0
      }, {
        "name": "永辉生活双阳路店9DFE 3-9",
        "state": 0
      }, {
        "name": "永辉生活云清路店9DG2 6-9",
        "state": 0
      }, {
        "name": "永辉生活外婆泾店YH9DGD 6-8",
        "state": 0
      }, {
        "name": "永辉生活涞坊路店YH9DGE 电梯口",
        "state": 0
      }, {
        "name": "苏州永辉生活东沙湖路店6-6",
        "state": 0
      }, {
        "name": "永辉生活罗锦路店YH9DGN 6-17",
        "state": 0
      }, {
        "name": "苏州永辉生活9DHS东沈浒路店6-7",
        "state": 0
      }, {
        "name": "永辉生活泽普路店YH9DJ6 1-1",
        "state": 0
      }, {
        "name": "苏州永辉生活9DEC王天井巷店6-4",
        "state": 0
      }, {
        "name": "永辉生活淮阴路店9DFA 1-10",
        "state": 0
      }, {
        "name": "苏州--永辉生活9DFG新未来花园店6-9",
        "state": 0
      },{
        "priority": 30,
        "SKU": {
          "total": 204,
          "finish": 0
        },
        "E": {
          "total": 713,
          "finish": 0
        },
        "shop": {
          "total": 32,
          "finish": 0
        },
        "shopState": [{
          "name": "永辉生活严桥路店YH9DH8 2-19",
          "state": 0
        }, {
          "name": "永辉生活台儿庄路店YH9DHW 3-19",
          "state": 0
        }, {
          "name": "永辉生活三门支路店YH9DI4 3-10",
          "state": 0
        }, {
          "name": "永辉生活新松江路店YH9DIR 6-12",
          "state": 0
        }, {
          "name": "永辉上海静安区--永辉生活新疆路店9DJA 2-2",
          "state": 0
        }, {
          "name": "永辉生活武威东路店 9DEE 2-11",
          "state": 0
        }, {
          "name": "永辉生活松兰路店9DEK 5-16",
          "state": 0
        }, {
          "name": "永辉生活罗秀路店9DEU 6-19",
          "state": 0
        }, {
          "name": "永辉生活环林东路YH9DGI 2-12",
          "state": 0
        }, {
          "name": "永辉生活黄兴路店9DFI 3-7",
          "state": 0
        }, {
          "name": "永辉生活梅园路店9DEH 电梯口",
          "state": 0
        }, {
          "name": "永辉生活浦东大道店 9DF2 1-14",
          "state": 0
        }, {
          "name": "永辉生活平城路店9DFC 电梯口",
          "state": 0
        }, {
          "name": "永辉生活梅岭北路店YH9DGA 2-14",
          "state": 0
        }, {
          "name": "永辉生活青松路店YH9DHL 6-3",
          "state": 0
        }, {
          "name": "永辉生活城中路店YH9DGP 电梯口",
          "state": 0
        }, {
          "name": "永辉生活芳华路店YH9DHK 2-18",
          "state": 0
        }, {
          "name": "永辉生活本溪路店YH9DIQ 4-10",
          "state": 0
        }, {
          "name": "苏州--永辉生活9DIY星湖街店6-10",
          "state": 0
        }, {
          "name": "永辉生活沁春路店YH9DI7 2-10",
          "state": 0
        }, {
          "name": "-永辉生活银都路 9DED 电梯口",
          "state": 0
        }, {
          "name": "永辉生活双阳路店9DFE 3-9",
          "state": 0
        }, {
          "name": "永辉生活云清路店9DG2 6-9",
          "state": 0
        }, {
          "name": "永辉生活外婆泾店YH9DGD 6-8",
          "state": 0
        }, {
          "name": "永辉生活涞坊路店YH9DGE 电梯口",
          "state": 0
        }, {
          "name": "苏州永辉生活东沙湖路店6-6",
          "state": 0
        }, {
          "name": "永辉生活罗锦路店YH9DGN 6-17",
          "state": 0
        }, {
          "name": "苏州永辉生活9DHS东沈浒路店6-7",
          "state": 0
        }, {
          "name": "永辉生活泽普路店YH9DJ6 1-1",
          "state": 0
        }, {
          "name": "苏州永辉生活9DEC王天井巷店6-4",
          "state": 0
        }, {
          "name": "永辉生活淮阴路店9DFA 1-10",
          "state": 0
        }, {
          "name": "苏州--永辉生活9DFG新未来花园店6-9",
          "state": 0
        }]
      }]
    }, 
    {
      "priority": 30,
      "SKU": {
        "total": 204,
        "finish": 0
      },
      "E": {
        "total": 713,
        "finish": 0
      },
      "shop": {
        "total": 32,
        "finish": 0
      },
      "shopState": [{
        "name": "永辉生活严桥路店YH9DH8 2-19",
        "state": 0
      }, {
        "name": "永辉生活台儿庄路店YH9DHW 3-19",
        "state": 0
      }, {
        "name": "永辉生活三门支路店YH9DI4 3-10",
        "state": 0
      }, {
        "name": "永辉生活新松江路店YH9DIR 6-12",
        "state": 0
      }, {
        "name": "永辉上海静安区--永辉生活新疆路店9DJA 2-2",
        "state": 0
      }, {
        "name": "永辉生活武威东路店 9DEE 2-11",
        "state": 0
      }, {
        "name": "永辉生活松兰路店9DEK 5-16",
        "state": 0
      }, {
        "name": "永辉生活罗秀路店9DEU 6-19",
        "state": 0
      }, {
        "name": "永辉生活环林东路YH9DGI 2-12",
        "state": 0
      }, {
        "name": "永辉生活黄兴路店9DFI 3-7",
        "state": 0
      }, {
        "name": "永辉生活梅园路店9DEH 电梯口",
        "state": 0
      }, {
        "name": "永辉生活浦东大道店 9DF2 1-14",
        "state": 0
      }, {
        "name": "永辉生活平城路店9DFC 电梯口",
        "state": 0
      }, {
        "name": "永辉生活梅岭北路店YH9DGA 2-14",
        "state": 0
      }, {
        "name": "永辉生活青松路店YH9DHL 6-3",
        "state": 0
      }, {
        "name": "永辉生活城中路店YH9DGP 电梯口",
        "state": 0
      }, {
        "name": "永辉生活芳华路店YH9DHK 2-18",
        "state": 0
      }, {
        "name": "永辉生活本溪路店YH9DIQ 4-10",
        "state": 0
      }, {
        "name": "苏州--永辉生活9DIY星湖街店6-10",
        "state": 0
      }, {
        "name": "永辉生活沁春路店YH9DI7 2-10",
        "state": 0
      }, {
        "name": "-永辉生活银都路 9DED 电梯口",
        "state": 0
      }, {
        "name": "永辉生活双阳路店9DFE 3-9",
        "state": 0
      }, {
        "name": "永辉生活云清路店9DG2 6-9",
        "state": 0
      }, {
        "name": "永辉生活外婆泾店YH9DGD 6-8",
        "state": 0
      }, {
        "name": "永辉生活涞坊路店YH9DGE 电梯口",
        "state": 0
      }, {
        "name": "苏州永辉生活东沙湖路店6-6",
        "state": 0
      }, {
        "name": "永辉生活罗锦路店YH9DGN 6-17",
        "state": 0
      }, {
        "name": "苏州永辉生活9DHS东沈浒路店6-7",
        "state": 0
      }, {
        "name": "永辉生活泽普路店YH9DJ6 1-1",
        "state": 0
      }, {
        "name": "苏州永辉生活9DEC王天井巷店6-4",
        "state": 0
      }, {
        "name": "永辉生活淮阴路店9DFA 1-10",
        "state": 0
      }, {
        "name": "苏州--永辉生活9DFG新未来花园店6-9",
        "state": 0
      }]
    }, 
    {
      "priority": 30,
      "SKU": {
        "total": 204,
        "finish": 0
      },
      "E": {
        "total": 713,
        "finish": 0
      },
      "shop": {
        "total": 32,
        "finish": 0
      },
      "shopState": [{
        "name": "永辉生活严桥路店YH9DH8 2-19",
        "state": 0
      }, {
        "name": "永辉生活台儿庄路店YH9DHW 3-19",
        "state": 0
      }, {
        "name": "永辉生活三门支路店YH9DI4 3-10",
        "state": 0
      }, {
        "name": "永辉生活新松江路店YH9DIR 6-12",
        "state": 0
      }, {
        "name": "永辉上海静安区--永辉生活新疆路店9DJA 2-2",
        "state": 0
      }, {
        "name": "永辉生活武威东路店 9DEE 2-11",
        "state": 0
      }, {
        "name": "永辉生活松兰路店9DEK 5-16",
        "state": 0
      }, {
        "name": "永辉生活罗秀路店9DEU 6-19",
        "state": 0
      }, {
        "name": "永辉生活环林东路YH9DGI 2-12",
        "state": 0
      }, {
        "name": "永辉生活黄兴路店9DFI 3-7",
        "state": 0
      }, {
        "name": "永辉生活梅园路店9DEH 电梯口",
        "state": 0
      }, {
        "name": "永辉生活浦东大道店 9DF2 1-14",
        "state": 0
      }, {
        "name": "永辉生活平城路店9DFC 电梯口",
        "state": 0
      }, {
        "name": "永辉生活梅岭北路店YH9DGA 2-14",
        "state": 0
      }, {
        "name": "永辉生活青松路店YH9DHL 6-3",
        "state": 0
      }, {
        "name": "永辉生活城中路店YH9DGP 电梯口",
        "state": 0
      }, {
        "name": "永辉生活芳华路店YH9DHK 2-18",
        "state": 0
      }, {
        "name": "永辉生活本溪路店YH9DIQ 4-10",
        "state": 0
      }, {
        "name": "苏州--永辉生活9DIY星湖街店6-10",
        "state": 0
      }, {
        "name": "永辉生活沁春路店YH9DI7 2-10",
        "state": 0
      }, {
        "name": "-永辉生活银都路 9DED 电梯口",
        "state": 0
      }, {
        "name": "永辉生活双阳路店9DFE 3-9",
        "state": 0
      }, {
        "name": "永辉生活云清路店9DG2 6-9",
        "state": 0
      }, {
        "name": "永辉生活外婆泾店YH9DGD 6-8",
        "state": 0
      }, {
        "name": "永辉生活涞坊路店YH9DGE 电梯口",
        "state": 0
      }, {
        "name": "苏州永辉生活东沙湖路店6-6",
        "state": 0
      }, {
        "name": "永辉生活罗锦路店YH9DGN 6-17",
        "state": 0
      }, {
        "name": "苏州永辉生活9DHS东沈浒路店6-7",
        "state": 0
      }, {
        "name": "永辉生活泽普路店YH9DJ6 1-1",
        "state": 0
      }, {
        "name": "苏州永辉生活9DEC王天井巷店6-4",
        "state": 0
      }, {
        "name": "永辉生活淮阴路店9DFA 1-10",
        "state": 0
      }, {
        "name": "苏州--永辉生活9DFG新未来花园店6-9",
        "state": 0
      }]
    }, 
  
    ]
  }






  //页面2
  //ctx.request.query.code  //这个是url中传的
  //ctx.request.body.code   //这个是body中传的
  if ("pickingTaskTotal" == ctx.request.query.code) {
    //当日拣货任务汇总
    obj = [{
      "code": "total",
      "e": Math.round(Math.random() * 10000),
      "sku": 100000
    }, {
      "code": "finish",
      "e": Math.round(Math.random() * 10000),
      "sku": Math.round(Math.random() * 10000)
    }, {
      "code": "unfinish",
      "e": Math.round(Math.random() * 10000),
      "sku": Math.round(Math.random() * 10000)
    }, {
      "code": "abnormal",
      "e": Math.round(Math.random() * 10000),
      "sku": Math.round(Math.random() * 10000)
    }]
  }
  if ("DC-Picking" == ctx.request.query.code) {
    //DC拣货任务
    obj = [{
      "code": "total",
      "e": 341,
      "sku": 342
    }, {
      "code": "finish",
      "e": 324,
      "sku": 4324
    }, {
      "code": "unfinish",
      "e": 6,
      "sku": 230
    }, {
      "code": "abnormal",
      "e": 7,
      "sku": 234
    }]
  }
  if ("AGV-Picking" == ctx.request.query.code) {
    //AGV拣货任务
    obj = [{
      "code": "total",
      "e": 341,
      "sku": 342
    }, {
      "code": "finish",
      "e": 324,
      "sku": 4324
    }, {
      "code": "unfinish",
      "e": 6,
      "sku": 23
    }, {
      "code": "abnormal",
      "e": 7,
      "sku": 234
    }]
  }
  if ("DC-Replenish" == ctx.request.query.code) {
    //DC补货任务
    obj = [{
      "code": "total",
      "e": 341,
      "sku": 342
    }, {
      "code": "finish",
      "e": 324,
      "sku": 432
    }, {
      "code": "unfinish",
      "e": 6,
      "sku": 23
    }, {
      "code": "abnormal",
      "e": 7,
      "sku": 234
    }]
  }




  //页面3
  if ("TrendChart" == ctx.request.query.code) {
    //图1
    obj = [{
      "xaxis": "18",
      "series": Math.round(Math.random() * 10000),
    }, {
      "xaxis": "19",
      "series": 3346
    }, {
      "xaxis": "20",
      "series": 1216
    }]
  }
  else if ("eachOnePicking" == ctx.request.query.code) {
    //图2
    obj = [
      {
        "xaxis": "甲",
        "series": Math.round(Math.random() * 10000),
      },
      {
        "xaxis": "乙",
        "series": 321
      },
      {
        "xaxis": "丙",
        "series": 100
      }
    ]
  }
  else if ("eachStation" == ctx.request.query.code) {
    //图3
    obj = [{
      "xaxis": "工作站1",
      "series": Math.round(Math.random() * 10000),
    }, {
      "xaxis": "工作站2",
      "series": 3346
    }, {
      "xaxis": "工作站3",
      "series": 888
    }]
  }

  ctx.body = {
    data:obj
  };

})

module.exports = router
