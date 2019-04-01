<template>
  <div class="myBox">
      
      <div class="HeadTitle">
        <router-link to="/picking" class="myLink active">拣货进度</router-link>
        <router-link to="/pickingReplenishment" class="myLink">拣货补货进度</router-link>
        <router-link to="/workload" class="myLink">工作量</router-link>
      </div>

      <div class="totalBox">
        <el-row :gutter="30">
          <el-col :span="8">
            <div class="borderBox totalBoxL">
              <pie :chartData="chartData"/>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="totalBoxR">
              <div class="totalBoxRT">
                <div>上海会员物流拣货进度</div>
                <div class="dateBox">
                  <dater />
                </div>
              </div>
              <div class="totalBoxRB">
                <el-row :gutter="30">
                  
                  <el-col :span="8">
                    <div class="cardBox">
                      <div class="cardBoxT">SKU</div>
                      <div class="cardBoxM">
                        <div>{{total.SKU.finish}}</div> 
                        <div>{{total.SKU.total}}</div> 
                      </div>
                      <div class="cardBoxB">
                        <div>完成数</div> 
                        <div>总数</div> 
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="cardBox">
                      <div class="cardBoxT">E数</div>
                      <div class="cardBoxM">
                        <div>{{total.E.finish}}</div> 
                        <div>{{total.E.total}}</div> 
                      </div>
                      <div class="cardBoxB">
                        <div>完成数</div> 
                        <div>总数</div> 
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="cardBox">
                      <div class="cardBoxT">门店数</div>
                      <div class="cardBoxM">
                        <div>{{total.shop.finish}}</div> 
                        <div>{{total.shop.total}}</div> 
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
          </el-col>
        </el-row>
      </div>
      
      <div class="linesBox borderBox MT30">
        
        <div class="linesList" v-for="one in lines">
          <el-row :gutter="10">
            <el-col :span="1"><div class="borderBox lineName">{{one.lineName}}</div></el-col>
            
            <el-col :span="4">

              <div class="borderBox">
                    <div class="cardBox">
                      <div class="cardBoxT">SKU</div>
                      <div class="cardBoxM">
                        <div>{{one.SKU.finish}}</div> 
                        <div>{{one.SKU.total}}</div> 
                      </div>
                      <div class="cardBoxB">
                        <div>完成数</div> 
                        <div>总数</div> 
                      </div>
                    </div>
              </div>
              
            </el-col>

            <el-col :span="4">
              <div class="borderBox">
                <div class="cardBox">
                  <div class="cardBoxT">E数</div>
                  <div class="cardBoxM">
                    <div>{{one.E.finish}}</div> 
                    <div>{{one.E.total}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
                  </div>
                </div>
              </div>
            </el-col>

            <el-col :span="4">
              <div class="borderBox">
                <div class="cardBox">
                  <div class="cardBoxT">门店数</div>
                  <div class="cardBoxM">
                    <div>{{one.shop.finish}}</div> 
                    <div>{{one.shop.total}}</div> 
                  </div>
                  <div class="cardBoxB">
                    <div>完成数</div> 
                    <div>总数</div> 
                  </div>
                </div>
              </div>
            </el-col>

            <el-col :span="11">
              <div class="borderBox">

                <template v-for="oneShop in one.shopState">
                  <template v-if="oneShop.state === 0">
                    <div class="miniCard shopUnFinish">{{oneShop.name}}</div>
                  </template>
                  <template v-else-if="oneShop.state === 1">
                    <div class="miniCard shopOnGoing">{{oneShop.name}}</div>
                  </template>
                  <template v-else-if="oneShop.state === 2">
                    <div class="miniCard shopFinish">{{oneShop.name}}</div>
                  </template>
                </template>
                


              </div>
            </el-col>
          </el-row>
        </div>
        


      </div>

  </div>
</template>

<script>
import addBtn from '../components/addBtn.vue'
import pie from '../components/pie.vue'
import dater from '../components/Dater.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    pie,
    dater,
    addBtn
  },
  data() {
    return {

      chartData:{
        chartId:"xxxyyy",
        titleText:"总体进度",
        percent:0,  //数据来自接口
      },

      //全部来自接口
      total:{
        SKU:{
          finish:0,
          total:0,
        },
        E:{
          finish:0,
          total:0,
        },
        shop:{
          finish:0,
          total:0,
        },
      },

      //数据全部来自接口
      lines:[
        {
          SKU:{
            finish:0,
            total:0,
          },
          E:{
            finish:0,
            total:0,
          },
          shop:{
            finish:0,
            total:0,
          },
          shopState:[{
            name:'绍兴店',
            state:0,
          }],
          lineName:'线路1'
        },
      ], 



    };
  },
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    }
  },
  mounted:function(){
    //webpack对 "http://localhost:8080/epimetheus/api/diy/report/queryReportByCode" 代理，
    //代理访问   "http://localhost:3000/epimetheus/api/diy/report/queryReportByCode"
    //匹配的规则是 '/epimetheus/api'
    axios.get('/epimetheus/api' + '/diy/report/queryReportByCode')
      .then((response)=>{
        this.chartData.percent = response.data.total.rate.data
        this.total             = response.data.total
        this.lines             = response.data.lines
      })    

  }
}
</script>

<style lang="scss">
.HeadTitle{
  width:100%;
  height:60px;
  line-height:60px;
  font-weight: bold;
  .myLink{
    margin-right:30px;
  }
}
.totalBox{
  height:320px;
  width:100%;
  .totalBoxL{
    height:320px;
  }
  .totalBoxR{
    height:320px;
    .totalBoxRT{
      height:160px;
      font-size:50px;
      text-align:center;
      position:relative;
    }
    .totalBoxRB{
      .borderBox{
        height:160px;
      }
      .cardBox{
        height:160px;
        .cardBoxM{
          font-size:50px;
        }
      }
    }
  }
}
.borderBox{
  border:solid 1px #666;
}

.linesBox{
  background:#fff;
  height:666px;
  .lineName{
    text-align:center;
  }
  .borderBox{
    height:130px;
    padding:10px;
    box-sizing:border-box;
    border:none;
  }
  .cardBox{
    height:110px;
    .cardBoxM{
      font-size:30px;
    }
  }
}
.linesList:nth-child(odd){
  background:#f3f3f3;
}

.miniCard{
  display:inline-block;
  width:90px;
  height:50px;
  line-height:50px;
  margin:0 10px 10px 0;
  background:#ccc;
  text-align:center;
}

.dateBox{
  position:absolute;
  top:0px;
  right:0px;
  font-size:12px;
}


//卡片的全部样式
.cardBox{
  display:flex;
  flex-direction:column;
  justify-content: space-around;

  //height:80px;
  text-align:center;
  border:solid 1px #666;
  
  box-sizing:border-box;  
  padding:5px;

  .cardBoxT{
    height:30%;
    font-size:20px;
    font-weight:bold;
  }
  .cardBoxM{
    display:flex;
    justify-content: space-around;
    height:50%; 
    font-size:35px;
    font-weight:bold;
    
  }
  .cardBoxB{
    display:flex;
    justify-content: space-around;
    height:30%;
  }
}


// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

.el-container {
  height: 100%;
}

.el-header{
  background:lightseagreen;
  font-size:20px;
  color:#fff;
}

.a{
  color:#111;
  .b{
    color:#bbb
  }
}

.myLink.active{
  color:red;
}

.shopUnFinish{
  background:#999;
}
.shopOnGoing{
  background:red;
}
.shopFinish{
  background:green;
}
</style>
