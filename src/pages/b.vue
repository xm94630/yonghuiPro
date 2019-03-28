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
        <div class="replenishBoxLineR">1222</div>
      </div>
      <div class="replenishBoxLine replenishBoxLine3">1</div>
      <div class="replenishBoxLine replenishBoxLine4">1</div>
      <div class="replenishBoxLine replenishBoxLine5">1</div>
    </div>



  </div>
</template>

<script>
import addBtn from '../components/addBtn.vue'
import pie from '../components/pie.vue'

export default {
  name: 'app',
  components: {
    pie,
    addBtn
  },
  data() {
    return {
      percent:0.6,
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

.replenishBox{
  height:90%;
  display:flex;
  flex-direction: column;
  justify-content:space-between;
}
.replenishBoxLine{
  border:solid 1px #666;
  display:flex;
  box-sizing:border-box;
  padding:0 20px;
  .replenishBoxLineL{
    width:85%;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    .replenishBoxLine_title{
      height:20%;
      display:flex;
      flex-direction: column;
      justify-content:center;
    }
    .replenishBoxLine_con{
      height:80%;
      border:solid 1px red;
    }
  }
  .replenishBoxLineR{
    width:15%
  }
}
.replenishBoxLine1{
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
