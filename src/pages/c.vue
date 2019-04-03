<template>
  <div class="myBox">
    <div class="HeadTitle">
      <router-link to="/picking" class="myLink">拣货进度</router-link>
      <router-link to="/pickingReplenishment" class="myLink">拣货补货进度</router-link>
      <router-link to="/workload" class="myLink active">工作量</router-link>
    </div>

    <div class="intervalSelectBox">
      刷新频率
      <el-select v-model="refreshTime" placeholder="请选择" @change="selectChange">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>

    <div class="workloadBox">
      <div class="workloadbaseBox workloadBoxT">
        <div class="mod">上海会员物流拣货工作量</div>
        <div class="dateBox">
          <dater/>
        </div>
      </div>
      <div class="workloadbaseBox workloadBoxM">
        <lineChart :percent="percent" :chartData="chartData1"/>
      </div>
      <div class="workloadbaseBox workloadBoxB">
        <div class="workloadBoxBL">
          <barChart :percent="percent" :chartData="chartData2"/>
        </div>
        <div class="workloadBoxBR">
          <barChart :percent="percent" :chartData="chartData3"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addBtn from "../components/addBtn.vue";
import lineChart from "../components/line.vue";
import barChart from "../components/bar.vue";
import dater from "../components/Dater.vue";
import axios from "axios";

import config from "../config";
let baseUrl = config.baseUrl || '';

export default {
  name: "app",
  components: {
    lineChart,
    barChart,
    dater,
    addBtn
  },
  data() {
    return {
      //刷新频率
      options: [
        {
          value: 5,
          label: "5分钟"
        },
        {
          value: 10,
          label: "10分钟"
        },
        {
          value: 30,
          label: "30分钟"
        }
      ],
      refreshTime: 5,
      intervalID: null,

      chartData1: {
        chartId: "aaa",
        titleText: "当日拣货任务汇总",
        xAxisData: ["0:00", "1:00"],
        seriesData: [100, 200]
      },
      chartData2: {
        chartId: "xxxyyy",
        titleText: "人工拣货每人拣货量",
        xAxisData: ["甲", "乙"],
        seriesData: [120, 200]
      },
      chartData3: {
        chartId: "zzz",
        titleText: "AGV每工位拣货量",
        xAxisData: ["甲", "乙"],
        seriesData: [10, 20]
      },

      percent: 0.6,
      isCollapse: true
    };
  },
  methods: {
    selectChange: function(v) {
      clearInterval(this.intervalID);
      this.intervalID = setInterval(() => {
        this.refreshData();
      }, v * 1000 * 60);
    },
    refreshData: function() {
      axios
        .post(baseUrl+"/epimetheus/api/diy/report/querySingleReportByCode?code=TrendChart")
        .then(response => {
          this.chartData1.xAxisData = _.map(response.data.data, _.iteratee("xaxis"));
          this.chartData1.seriesData = _.map(
            response.data.data,
            _.iteratee("series")
          );
        });

      axios
        .post(baseUrl+"/epimetheus/api/diy/report/querySingleReportByCode?code=eachOnePicking")
        .then(response => {
          this.chartData2.xAxisData = _.map(response.data.data, _.iteratee("xaxis"));
          this.chartData2.seriesData = _.map(
            response.data.data,
            _.iteratee("series")
          );
        });

      axios
        .post(baseUrl+"/epimetheus/api/diy/report/querySingleReportByCode?code=eachStation")
        .then(response => {
          this.chartData3.xAxisData = _.map(response.data.data, _.iteratee("xaxis"));
          this.chartData3.seriesData = _.map(
            response.data.data,
            _.iteratee("series")
          );
        });
    }
  },

  mounted: function() {
    this.refreshData();
    this.intervalID = setInterval(() => {
      this.refreshData();
    }, this.refreshTime * 1000 * 60);
  },
  
  beforeDestroy:function(){
    clearInterval(this.intervalID);
  }

};
</script>

<style lang="scss">
.HeadTitle {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  .myLink {
    margin-right: 30px;
  }
}

.workloadBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  //border:solid 1px red;
  .workloadbaseBox {
    position: relative;
  }
}

.workloadBoxT {
  height: 10%;
  //border:solid 1px #666;
  font-size: 50px;
  text-align: center;
  //垂直居中
  display: flex;
  flex-direction: column;
  justify-content: center;
  .mod{
    position: relative;
    top:-10px;
  }
}
.workloadBoxM {
  height: 41%;
  background-color: #ffffff;
  box-shadow: 0px 5px 5px 0px rgba(187, 194, 225, 0.22);
  border-radius: 10px;
  border: solid 1px #e5e5e5;
}
.workloadBoxB {
  height: 41%;
  display: flex;
  justify-content: space-between;
}

.workloadBoxBL {
  width: 48%;
  background-color: #ffffff;
  box-shadow: 0px 5px 5px 0px rgba(187, 194, 225, 0.22);
  border-radius: 10px;
  border: solid 1px #e5e5e5;
}
.workloadBoxBR {
  width: 48%;
  background-color: #ffffff;
  box-shadow: 0px 5px 5px 0px rgba(187, 194, 225, 0.22);
  border-radius: 10px;
  border: solid 1px #e5e5e5;
}
</style>