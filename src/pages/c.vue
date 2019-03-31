<template>
  <div class="myBox">

    <div class="HeadTitle">
      <router-link to="/picking" class="myLink">拣货进度</router-link>
      <router-link to="/pickingReplenishment" class="myLink">拣货补货进度</router-link>
      <router-link to="/workload" class="myLink active">工作量</router-link>
    </div>

    <div class="workloadBox">
      <div class="workloadbaseBox workloadBoxT">
        上海会员物流拣货工作量
        <div class="dateBox">
          <dater />
        </div>  
      </div>
      <div class="workloadbaseBox workloadBoxM">
        <lineChart :percent="percent" :chartData="chartData1"/>
      </div>
      <div class="workloadbaseBox workloadBoxB">
        <div class="workloadBoxBL">
          <barChart :percent="percent" :chartData="chartData2" />
        </div>
        <div class="workloadBoxBR">
          <barChart :percent="percent" :chartData="chartData3" />
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import addBtn from '../components/addBtn.vue'
import lineChart from '../components/line.vue'
import barChart from '../components/bar.vue'
import dater from '../components/Dater.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    lineChart,
    barChart,
    dater,
    addBtn
  },
  data() {
    return {
      chartData1:{
        chartId:"aaa",
        titleText:"当日拣货任务汇总",
        xAxisData:['0:00',"1:00"],
        seriesData:[100,200],
      },
      chartData2:{
        chartId:"xxxyyy",
        titleText:"人工拣货每人拣货量",
        xAxisData:['甲', '乙', '丙', '丁','甲', '乙', '丙', '丁'],
        seriesData:[120, 200, 150, 80,120, 100, 150, 80]
      },
      chartData3:{
        chartId:"zzz",
        titleText:"AGV每工位拣货量",
        xAxisData:['甲', '乙', '丙', '丁','甲', '乙', '丙', '丁'],
        seriesData:[10, 20, 15, 80,120, 100, 150, 80]
      },

      percent:0.6,
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    }
  },
  
  mounted:function(){
    //webpack对 "http://localhost:8080/epimetheus/api/diy/report/queryReportByCode/3" 代理，
    //代理访问   "http://localhost:3000/epimetheus/api/diy/report/queryReportByCode/3"
    //匹配的规则是 '/epimetheus/api'
    axios.get('/epimetheus/api' + '/diy/report/queryReportByCode/3')
      .then((response)=>{
        //更新图标1
        this.chartData1.xAxisData  = response.data.total.data.xAxis.data
        this.chartData1.seriesData = response.data.total.data.series[0].data 
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

.workloadBox{
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  height:90%;
  //border:solid 1px red;
  .workloadbaseBox{
    position:relative;
  }
}

.workloadBoxT{
  height:10%;
  //border:solid 1px #666;
  font-size:50px;
  text-align:center;
  //垂直居中
  display:flex;
  flex-direction: column;
  justify-content:center;
}
.workloadBoxM{
  height:41%;
  border:solid 1px #666;
}
.workloadBoxB{
  height:41%;
  display:flex;
  justify-content:space-between;
}

.workloadBoxBL{
  width:48%;
  border:solid 1px #666;
}
.workloadBoxBR{
  width:48%;
  border:solid 1px #666;
}

</style>