<template>
  <div class="myBox">

    <!--<card title="任务总量" text1="SKU" text2="E数" :cardData="arr" />-->
    
    <div class="HeadTitle">
      <router-link to="/picking" class="myLink">拣货进度</router-link>
      <router-link to="/pickingReplenishment" class="myLink active">拣货补货进度</router-link>
      <router-link to="/workload" class="myLink">工作量</router-link>
    </div>

    <div class="replenishBox">
      <div class="replenishBoxLine replenishBoxLine1">
        上海会员物流拣货补货进度
        <div class="dateBox">
          <dater />
        </div>
      </div>

      <div class="replenishBoxLine replenishBoxLine2">
        <div class="replenishBoxLineL">
          <div class="replenishBoxLine_title">
            <div>当日拣货任务汇总</div>
          </div>
          <div class="replenishBoxLine_con">
            <el-row :gutter="10">      
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT"> 任务总量</div>
                  <div class="cardBoxM">
                    <div>{{total.taskTotal.SKU}}</div> 
                    <div>{{total.taskTotal.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">已完成</div>
                  <div class="cardBoxM">
                    <div>{{total.finish.SKU}}</div> 
                    <div>{{total.finish.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">未完成</div>
                  <div class="cardBoxM">
                    <div>{{total.unfinish.SKU}}</div> 
                    <div>{{total.unfinish.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">异常</div>
                  <div class="cardBoxM">
                    <div>{{total.abnormal.SKU}}</div> 
                    <div>{{total.abnormal.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>

            </el-row>



          </div>
        </div>
        <div class="replenishBoxLineR"><pie2 :chartData="chartData1" /></div>
      </div>
      <div class="replenishBoxLine replenishBoxLine3">
        <div class="replenishBoxLineL">
          <div class="replenishBoxLine_title">
            <div>DC拣货任务</div>
          </div>
          <div class="replenishBoxLine_con">
            <el-row :gutter="10">      
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT"> 任务总量</div>
                  <div class="cardBoxM">
                    <div>{{DCPicking.abnormal.SKU}}</div> 
                    <div>{{DCPicking.abnormal.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">已完成</div>
                  <div class="cardBoxM">
                    <div>{{DCPicking.finish.SKU}}</div> 
                    <div>{{DCPicking.finish.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">未完成</div>
                  <div class="cardBoxM">
                    <div>{{DCPicking.unfinish.SKU}}</div> 
                    <div>{{DCPicking.unfinish.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">异常</div>
                  <div class="cardBoxM">
                    <div>{{DCPicking.abnormal.SKU}}</div> 
                    <div>{{DCPicking.abnormal.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>

            </el-row>



          </div>
        </div>
        <div class="replenishBoxLineR"><pie2 :chartData="chartData2" /></div>
      </div>
      <div class="replenishBoxLine replenishBoxLine4">
        <div class="replenishBoxLineL">
          <div class="replenishBoxLine_title">
            <div>AGV拣货任务</div>
          </div>
          <div class="replenishBoxLine_con">
            <el-row :gutter="10">      
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT"> 任务总量</div>
                  <div class="cardBoxM">
                    <div>{{AGVPicking.abnormal.SKU}}</div> 
                    <div>{{AGVPicking.abnormal.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">已完成</div>
                  <div class="cardBoxM">
                    <div>{{AGVPicking.finish.SKU}}</div> 
                    <div>{{AGVPicking.finish.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">未完成</div>
                  <div class="cardBoxM">
                    <div>{{AGVPicking.unfinish.SKU}}</div> 
                    <div>{{AGVPicking.unfinish.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">异常</div>
                  <div class="cardBoxM">
                    <div>{{AGVPicking.abnormal.SKU}}</div> 
                    <div>{{AGVPicking.abnormal.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>

            </el-row>



          </div>
        </div>
        <div class="replenishBoxLineR"><pie2 :chartData="chartData3" /></div>
      </div>
      <div class="replenishBoxLine replenishBoxLine5">
        <div class="replenishBoxLineL">
          <div class="replenishBoxLine_title">
            <div>DC补货任务</div>
          </div>
          <div class="replenishBoxLine_con">
            <el-row :gutter="10">      
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT"> 任务总量</div>
                  <div class="cardBoxM">
                    <div>{{DCReplenish.taskTotal.SKU}}</div> 
                    <div>{{DCReplenish.taskTotal.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">已完成</div>
                  <div class="cardBoxM">
                    <div>{{DCReplenish.finish.SKU}}</div> 
                    <div>{{DCReplenish.finish.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">未完成</div>
                  <div class="cardBoxM">
                    <div>{{DCReplenish.unfinish.SKU}}</div> 
                    <div>{{DCReplenish.unfinish.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">异常</div>
                  <div class="cardBoxM">
                    <div>{{DCReplenish.abnormal.SKU}}</div> 
                    <div>{{DCReplenish.abnormal.E}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>SKU</div> 
                    <div>E数</div> 
                  </div>
                </div>

              </el-col>

            </el-row>



          </div>
        </div>
        <div class="replenishBoxLineR"><pie2 :chartData="chartData4" /></div>
      </div>


    </div>



  </div>
</template>

<script>
import pie2 from '../components/pie2.vue'
import dater from '../components/Dater.vue'
import card from '../components/card.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    pie2,
    dater,
    card
  },
  data() {
    return {

      //arr:[{value:100},{value:200}],

      percent:0.6,
      isCollapse: true,

      //汇总
      total:{  
        taskTotal:{
          SKU:0,
          E:0,
        },
        finish:{
          SKU:0,
          E:0,
        },
        unfinish:{
          SKU:0,
          E:0,
        },
        abnormal :{
          SKU:0,
          E:0,
        },
      },

      //DC拣货
      DCPicking:{
        taskTotal:{
          SKU:0,
          E:0,
        },
        finish:{
          SKU:0,
          E:0,
        },
        unfinish:{
          SKU:0,
          E:0,
        },
        abnormal :{
          SKU:0,
          E:0,
        },
      },

      //AGV拣货
      AGVPicking:{
        taskTotal:{
          SKU:0,
          E:0,
        },
        finish:{
          SKU:0,
          E:0,
        },
        unfinish:{
          SKU:0,
          E:0,
        },
        abnormal :{
          SKU:0,
          E:0,
        },
      },

      //补货
      DCReplenish:{  
        taskTotal:{
          SKU:0,
          E:0,
        },
        finish:{
          SKU:0,
          E:0,
        },
        unfinish:{
          SKU:0,
          E:0,
        },
        abnormal :{
          SKU:0,
          E:0,
        },  
      },


      chartData1:{
        chartId:"id001",
        titleText:"",
        seriesData:[
          {value:0, name:'已完成'},
          {value:0, name:'未完成'},
          {value:0, name:'异常'}
        ],
      },
      chartData2:{
        chartId:"id002",
        titleText:"",
        seriesData:[
          {value:0, name:'已完成'},
          {value:0, name:'未完成'},
          {value:0, name:'异常'}
        ],
      },
      chartData3:{
        chartId:"id003",
        titleText:"",
        seriesData:[
          {value:0, name:'已完成'},
          {value:0, name:'未完成'},
          {value:0, name:'异常'}
        ],
      },
      chartData4:{
        chartId:"id004",
        titleText:"",
        seriesData:[
          {value:0, name:'已完成'},
          {value:0, name:'未完成'},
          {value:0, name:'异常'}
        ],
      }
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    }
  },
  mounted:function(){
    //webpack对 "http://localhost:8080/epimetheus/api/diy/report/queryReportByCode/2" 代理，
    //代理访问   "http://localhost:3000/epimetheus/api/diy/report/queryReportByCode/2"
    //匹配的规则是 '/epimetheus/api'
    axios.get('/epimetheus/api' + '/diy/report/queryReportByCode/2')
      .then((response)=>{
        console.log(123)

        //卡片数据
        this.total = response.data.total;
        this.DCPicking = response.data.DCPicking;
        this.AGVPicking = response.data.AGVPicking;
        this.DCReplenish = response.data.DCReplenish;
        //饼图数据
        //这部分数据后端不按照前端约定实现，显得有点臃肿..
        this.chartData1.seriesData[0].value = response.data.total.pie[0]
        this.chartData1.seriesData[1].value = response.data.total.pie[1]
        this.chartData1.seriesData[2].value = response.data.total.pie[2]

        this.chartData2.seriesData[0].value = response.data.DCPicking.pie[0]
        this.chartData2.seriesData[1].value = response.data.DCPicking.pie[1]
        this.chartData2.seriesData[2].value = response.data.DCPicking.pie[2]

        this.chartData3.seriesData[0].value = response.data.AGVPicking.pie[0]
        this.chartData3.seriesData[1].value = response.data.AGVPicking.pie[1]
        this.chartData3.seriesData[2].value = response.data.AGVPicking.pie[2]

        this.chartData4.seriesData[0].value = response.data.DCReplenish.pie[0]
        this.chartData4.seriesData[1].value = response.data.DCReplenish.pie[1]
        this.chartData4.seriesData[2].value = response.data.DCReplenish.pie[2]
        
      })
  }
}
</script>

<style lang="scss">
.myBox{
  font-size:12px;
  width:1080px;
  height:607.5px;
  margin:0 auto;
  border:solid 1px #000;
  background:#fff;
  padding:0 30px;
}
.HeadTitle{
  width:100%;
  height:40px;
  line-height:40px;
  font-weight: bold;
  .myLink{
    margin-right:30px;
  }
}

.replenishBox{
  height:90%;
  display:flex;
  flex-direction: column;
  justify-content:space-between;
}
.replenishBoxLine{
  position:relative;
  border:solid 1px #666;
  display:flex;
  box-sizing:border-box;
  padding:0 20px;
  .replenishBoxLineL{
    width:80%;
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    .replenishBoxLine_title{
      height:20%;
      display:flex;
      flex-direction: column;
      justify-content:center;
    }
    .replenishBoxLine_con{
      height:65%;
      //border:solid 1px red;
      .el-row{
        height:100%;
        .el-col{ 
          height:100%;
          .cardBox{
            height:100%;
          }
        }
      }
    }
  }
  .replenishBoxLineR{
    width:20%
  }
}
.replenishBoxLine1{
  text-align: center;
  width:100%;
  height:10%;
  border:none;
  font-size:50px;
  margin:0 auto;
  display:flex;
  flex-direction: column;
  justify-content:center;
}
.replenishBoxLine2{height:20%}
.replenishBoxLine3{height:20%}
.replenishBoxLine4{height:20%}
.replenishBoxLine5{height:20%}
</style>
