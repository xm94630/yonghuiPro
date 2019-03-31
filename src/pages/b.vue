<template>
  <div class="myBox">
    
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

      <!-- 对象遍历 -->
      <template v-for="(one, key, index) in lines">

        <div class="replenishBoxLine replenishBoxLineHeight">
          <div class="replenishBoxLineL">
            <div class="replenishBoxLine_title">

              <div v-if="key === 'total'">
                当日拣货任务汇总
              </div>
              <div v-else-if="key === 'AGVPicking'">
                AGV拣货任务
              </div>
              <div v-else-if="key === 'DCPicking'">
                DC拣货任务
              </div>
              <div v-else>
                DC补货任务
              </div>

            </div>
            <div class="replenishBoxLine_con">

              <el-row :gutter="10">      
                <el-col :span="6">
                  <card :data1="lines[key].taskTotal.SKU" :data2="lines[key].taskTotal.E" title="任务总量" text1="SKU" text2="E数" />
                </el-col>
                <el-col :span="6">
                  <card :data1="lines[key].finish.SKU" :data2="lines[key].finish.E" title="已完成" text1="SKU" text2="E数" />
                </el-col>
                <el-col :span="6">
                  <card :data1="lines[key].unfinish.SKU" :data2="lines[key].unfinish.E" title="未完成" text1="SKU" text2="E数" />
                </el-col>
                <el-col :span="6">
                  <card :data1="lines[key].abnormal.SKU" :data2="lines[key].abnormal.E" title="异常" text1="SKU" text2="E数" />
                </el-col>
              </el-row>

            </div>
          </div>
          <div class="replenishBoxLineR"><pie2 :chartData="lines[key].chartData" /></div>
        </div>

      </template>
 
      <!--
      <div class="replenishBoxLine replenishBoxLineHeight">
        <div class="replenishBoxLineL">
          <div class="replenishBoxLine_title">
            <div>DC拣货任务</div>
          </div>
          <div class="replenishBoxLine_con">
            <el-row :gutter="10">  

              <el-col :span="6">
                <card :data1="DCPicking.taskTotal.SKU" :data2="DCPicking.taskTotal.E" title="任务总量" text1="SKU" text2="E数" />
              </el-col>
              <el-col :span="6">
                <card :data1="DCPicking.finish.SKU" :data2="DCPicking.finish.E" title="任务总量" text1="SKU" text2="E数" />
              </el-col>
              <el-col :span="6">
                <card :data1="DCPicking.unfinish.SKU" :data2="DCPicking.unfinish.E" title="任务总量" text1="SKU" text2="E数" />
              </el-col>
              <el-col :span="6">
                <card :data1="DCPicking.abnormal.SKU" :data2="DCPicking.abnormal.E" title="任务总量" text1="SKU" text2="E数" />
              </el-col>

            </el-row>

          </div>
        </div>
        <div class="replenishBoxLineR"><pie2 :chartData="chartData2" /></div>
      </div>

      <div class="replenishBoxLine replenishBoxLineHeight">
        <div class="replenishBoxLineL">
          <div class="replenishBoxLine_title">
            <div>AGV拣货任务</div>
          </div>
          <div class="replenishBoxLine_con">
            <el-row :gutter="10">  

              <el-col :span="6">
                <card :data1="AGVPicking.taskTotal.SKU" :data2="AGVPicking.taskTotal.E" title="任务总量" text1="SKU" text2="E数" />
              </el-col>
              <el-col :span="6">
                <card :data1="AGVPicking.finish.SKU" :data2="AGVPicking.finish.E" title="任务总量" text1="SKU" text2="E数" />
              </el-col>
              <el-col :span="6">
                <card :data1="AGVPicking.unfinish.SKU" :data2="AGVPicking.unfinish.E" title="任务总量" text1="SKU" text2="E数" />
              </el-col>
              <el-col :span="6">
                <card :data1="AGVPicking.abnormal.SKU" :data2="AGVPicking.abnormal.E" title="任务总量" text1="SKU" text2="E数" />
              </el-col>

            </el-row>

          </div>
        </div>
        <div class="replenishBoxLineR"><pie2 :chartData="chartData3" /></div>
      </div>

      <div class="replenishBoxLine replenishBoxLineHeight">
        <div class="replenishBoxLineL">
          <div class="replenishBoxLine_title">
            <div>DC补货任务</div>
          </div>
          <div class="replenishBoxLine_con">
            <el-row :gutter="10">  

              <el-col :span="6">
                <card :data1="DCReplenish.taskTotal.SKU" :data2="DCReplenish.taskTotal.E" title="任务总量" text1="SKU" text2="E数" />
              </el-col>
              <el-col :span="6">
                <card :data1="DCReplenish.finish.SKU" :data2="DCReplenish.finish.E" title="任务总量" text1="SKU" text2="E数" />
              </el-col>
              <el-col :span="6">
                <card :data1="DCReplenish.unfinish.SKU" :data2="DCReplenish.unfinish.E" title="任务总量" text1="SKU" text2="E数" />
              </el-col>
              <el-col :span="6">
                <card :data1="DCReplenish.abnormal.SKU" :data2="DCReplenish.abnormal.E" title="任务总量" text1="SKU" text2="E数" />
              </el-col>  

            </el-row>

          </div>
        </div>
        <div class="replenishBoxLineR"><pie2 :chartData="chartData4" /></div>
      </div> -->

    </div>



  </div>
</template>

<script>
import pie2 from '../components/pie2.vue'
import dater from '../components/Dater.vue'
import card from '../components/card.vue'
import axios from 'axios'


function parsePieData(id,arr){
  return {
    chartId:id,
    titleText:"",
    seriesData:[
      {value:arr[0], name:'已完成'},
      {value:arr[1], name:'未完成'},
      {value:arr[2], name:'异常'}
    ],
  }
}

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

      lines:{

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
          chartData:parsePieData('id001',[0,0,0])
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
          chartData:{
            chartId:"id002",
            titleText:"",
            seriesData:[
              {value:2, name:'已完成'},
              {value:1, name:'未完成'},
              {value:0, name:'异常'}
            ],
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
          chartData:{
            chartId:"id003",
            titleText:"",
            seriesData:[
              {value:0, name:'已完成'},
              {value:0, name:'未完成'},
              {value:0, name:'异常'}
            ],
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
          chartData:{
            chartId:"id004",
            titleText:"",
            seriesData:[
              {value:0, name:'已完成'},
              {value:0, name:'未完成'},
              {value:0, name:'异常'}
            ],
          }
        },

      },


      
      


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

        //这部分数据后端不按照前端约定实现，显得有点臃肿..
        this.lines.total.taskTotal = response.data.total.taskTotal;
        this.lines.total.finish = response.data.total.finish;
        this.lines.total.unfinish = response.data.total.unfinish;
        this.lines.total.abnormal = response.data.total.abnormal;
        this.lines.total.chartData = parsePieData('id001',response.data.total.pie) 

        this.lines.DCPicking.taskTotal = response.data.DCPicking.taskTotal;
        this.lines.DCPicking.finish = response.data.DCPicking.finish;
        this.lines.DCPicking.unfinish = response.data.DCPicking.unfinish;
        this.lines.DCPicking.abnormal = response.data.DCPicking.abnormal;
        this.lines.DCPicking.chartData = parsePieData('id002',response.data.DCPicking.pie) 

        this.lines.AGVPicking.taskTotal = response.data.AGVPicking.taskTotal;
        this.lines.AGVPicking.finish = response.data.AGVPicking.finish;
        this.lines.AGVPicking.unfinish = response.data.AGVPicking.unfinish;
        this.lines.AGVPicking.abnormal = response.data.AGVPicking.abnormal;
        this.lines.AGVPicking.chartData = parsePieData('id003',response.data.AGVPicking.pie) 
        
        this.lines.DCReplenish.taskTotal = response.data.DCReplenish.taskTotal;
        this.lines.DCReplenish.finish = response.data.DCReplenish.finish;
        this.lines.DCReplenish.unfinish = response.data.DCReplenish.unfinish;
        this.lines.DCReplenish.abnormal = response.data.DCReplenish.abnormal;
        this.lines.DCReplenish.chartData = parsePieData('id004',response.data.DCReplenish.pie)         
        
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
.replenishBoxLineHeight{height:20%}
</style>
