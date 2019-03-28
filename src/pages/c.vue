<template>
  <div class="myBox">

    <div class="HeadTitle">
      <router-link to="/picking" class="myLink">拣货进度</router-link>
      <router-link to="/pickingReplenishment" class="myLink">拣货补货进度</router-link>
      <router-link to="/workload" class="myLink active">工作量</router-link>
    </div>

    <div class="workloadBox">
      <div class="workloadbaseBox workloadBoxT">上海会员物流拣货工作量</div>
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

export default {
  name: 'app',
  components: {
    lineChart,
    barChart,
    addBtn
  },
  data() {
    return {
      chartData1:{
        chartId:"aaa",
        titleText:"当日拣货任务汇总",
        xAxisData:['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00','7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00','14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00', '24:00'],
        seriesData:[110, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,1220, 932, 901, 934, 1290, 330, 120,820, 932, 901, 934],
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

.workloadBox{
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  height:90%;
  //border:solid 1px red;
}

.workloadBoxT{
  height:10%;
  //border:solid 1px #666;
  font-size:30px;
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