<template>
  <div class="myBox">
      
<div class="cardBox">
                      <div class="cardBoxT">SKU</div>
                      <div class="cardBoxM">
                        <div>8888</div> 
                        <div>8888</div> 
                      </div>
                      <div class="cardBoxB">
                        <div>完成数</div> 
                        <div>总数</div> 
                      </div>
                    </div>

      <div class="HeadTitle">
        <router-link to="/picking" class="myLink">拣货进度</router-link>
        <router-link to="/pickingReplenishment" class="myLink">拣货补货进度</router-link>
        <router-link to="/workload" class="myLink">工作量</router-link>
      </div>

      <div class="totalBox">
        <el-row :gutter="30">
          <el-col :span="8"><div class="borderBox totalBoxL">123</div></el-col>
          <el-col :span="16">
            <div class="totalBoxR">
              <div class="totalBoxRT">
                <div>上海会员物流拣货进度</div>
                <div class="dateBox">1970-01-01 18:00:00</div>
              </div>
              <div class="totalBoxRB">
                <el-row :gutter="30">
                  
                  <el-col :span="8">
                    <div class="cardBox">
                      <div class="cardBoxT">SKU</div>
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
                  <el-col :span="8">
                    <div class="cardBox">
                      <div class="cardBoxT">SKU</div>
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
                  <el-col :span="8">
                    <div class="cardBox">
                      <div class="cardBoxT">SKU</div>
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
          </el-col>
        </el-row>
      </div>
      
      <div class="linesBox borderBox MT10">
        <div class="linesList">
          <el-row :gutter="10">
            <el-col :span="1"><div class="borderBox">路线11</div></el-col>
            
            <el-col :span="4">

              <div class="borderBox">
                    <div class="cardBox">
                      <div class="cardBoxT">SKU</div>
                      <div class="cardBoxM">
                        <div>8888</div> 
                        <div>8888</div> 
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
                    <div>8888</div> 
                    <div>8888</div> 
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
                    <div >8888</div> 
                    <div >8888</div> 
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
                <div class="miniCard">门店1</div>
                <div class="miniCard">门店2</div>
                <div class="miniCard">门店2</div>
                <div class="miniCard">门店2</div>
                <div class="miniCard">门店2</div>
                <div class="miniCard">门店2</div>
                <div class="miniCard">门店2</div>
                <div class="miniCard">门店2</div>

                <div class="miniCard">门店1</div>
                <div class="miniCard">门店2</div>
                <div class="miniCard">门店2</div>
                <div class="miniCard">门店2</div>
                <div class="miniCard">门店2</div>
                <div class="miniCard">门店2</div>
                <div class="miniCard">门店2</div>
                <div class="miniCard">门店2</div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="linesList">
          <el-row :gutter="10">
            <el-col :span="1"><div class="borderBox">1</div></el-col>
            <el-col :span="11"><div class="borderBox">2</div></el-col>
            <el-col :span="12"><div class="borderBox">3</div></el-col>
          </el-row>
        </div>
        <div class="linesList">
          <el-row :gutter="10">
            <el-col :span="1"><div class="borderBox">1</div></el-col>
            <el-col :span="11"><div class="borderBox">2</div></el-col>
            <el-col :span="12"><div class="borderBox">3</div></el-col>
          </el-row>
        </div>
        <div class="linesList">
          <el-row :gutter="10">
            <el-col :span="1"><div class="borderBox">1</div></el-col>
            <el-col :span="11"><div class="borderBox">2</div></el-col>
            <el-col :span="12"><div class="borderBox">3</div></el-col>
          </el-row>
        </div>
        <div class="linesList">
          <el-row :gutter="10">
            <el-col :span="1"><div class="borderBox">1</div></el-col>
            <el-col :span="11"><div class="borderBox">2</div></el-col>
            <el-col :span="12"><div class="borderBox">3</div></el-col>
          </el-row>
        </div>
      </div>

  </div>
</template>

<script>
import addBtn from '../components/addBtn.vue'

export default {
  name: 'app',
  components: {
    addBtn
  },
  data() {
    return {
      isCollapse: true
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
.totalBox{
  height:160px;
  width:100%;
  .totalBoxL{
    height:160px;
  }
  .totalBoxR{
    height:160px;
    .totalBoxRT{
      height:70px;
      font-size:20px;
      text-align:center;
      position:relative;
      .dateBox{
        position:absolute;
        top:0px;
        right:0px;
        font-size:12px;
      }
    }
    .totalBoxRB{
      .borderBox{
        height:80px;
      }
    }
  }
}
.borderBox{
  border:solid 1px #666;
}

.linesBox{
  background:#fff;
  height:380px;
  .borderBox{
    height:75px;
    padding:5px;
    box-sizing:border-box;
    border:none;
  }
  .cardBox{
    height:50px;
  }
}
.linesList:nth-child(odd){
  background:#f3f3f3;
}

.miniCard{
  display:inline-block;
  width:48px;
  height:30px;
  margin:0 10px 5px 0;
  background:#ccc;
  line-height:30px;
  text-align:center;
}


//卡片的全部样式
.cardBox{
  display:flex;
  flex-direction:column;
  justify-content: space-around;

  height:80px;
  text-align:center;
  border:solid 1px #666;
  padding:5px;
  .cardBoxT{
    height:25%;
    line-height:100%x;
  }
  .cardBoxM{
    display:flex;
    justify-content: space-around;

    height:50%; 
    line-height:100%;
    font-size:20px;
    font-weight:bold;
    
  }
  .cardBoxB{
    display:flex;
    justify-content: space-around;
    
    height:25%;
    line-height:100%;
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
</style>
