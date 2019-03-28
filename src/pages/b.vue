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
        <div class="dateBox">1970-01-01 18:00:00</div>
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
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">已完成</div>
                  <div class="cardBoxM">
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">未完成</div>
                  <div class="cardBoxM">
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">异常</div>
                  <div class="cardBoxM">
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
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
            <div>当日拣货任务汇总</div>
          </div>
          <div class="replenishBoxLine_con">
            <el-row :gutter="10">      
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT"> 任务总量</div>
                  <div class="cardBoxM">
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">已完成</div>
                  <div class="cardBoxM">
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">未完成</div>
                  <div class="cardBoxM">
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">异常</div>
                  <div class="cardBoxM">
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
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
            <div>当日拣货任务汇总</div>
          </div>
          <div class="replenishBoxLine_con">
            <el-row :gutter="10">      
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT"> 任务总量</div>
                  <div class="cardBoxM">
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">已完成</div>
                  <div class="cardBoxM">
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">未完成</div>
                  <div class="cardBoxM">
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">异常</div>
                  <div class="cardBoxM">
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
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
            <div>当日拣货任务汇总</div>
          </div>
          <div class="replenishBoxLine_con">
            <el-row :gutter="10">      
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT"> 任务总量</div>
                  <div class="cardBoxM">
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">已完成</div>
                  <div class="cardBoxM">
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">未完成</div>
                  <div class="cardBoxM">
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
                  </div>
                </div>

              </el-col>
              <el-col :span="6">

                <div class="cardBox">
                  <div class="cardBoxT">异常</div>
                  <div class="cardBoxM">
                    <div>8888</div> 
                    <div>8888</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
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
import addBtn from '../components/addBtn.vue'
import pie2 from '../components/pie2.vue'

export default {
  name: 'app',
  components: {
    pie2,
    addBtn
  },
  data() {
    return {
      percent:0.6,
      isCollapse: true,
      chartData1:{
        chartId:"id001",
        titleText:"",
        percent:0.6,
        seriesData:[
          {value:100, name:'异常'},
          {value:100, name:'已完成'},
          {value:100, name:'未完成'}
        ],
      },
      chartData2:{
        chartId:"id002",
        titleText:"",
        percent:0.6,
        seriesData:[
          {value:100, name:'异常'},
          {value:10, name:'已完成'},
          {value:100, name:'未完成'}
        ],
      },
      chartData3:{
        chartId:"id003",
        titleText:"",
        percent:0.6,
        seriesData:[
          {value:100, name:'异常'},
          {value:300, name:'已完成'},
          {value:100, name:'未完成'}
        ],
      },
      chartData4:{
        chartId:"id004",
        titleText:"",
        percent:0.6,
        seriesData:[
          {value:100, name:'异常'},
          {value:100, name:'已完成'},
          {value:100, name:'未完成'}
        ],
      }
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
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
      height:18%;
      display:flex;
      flex-direction: column;
      justify-content:center;
    }
    .replenishBoxLine_con{
      height:60%;
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
  font-size:30px;
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
