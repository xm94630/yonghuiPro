<template>
  <div class="myBox page2">
    <div class="HeadTitle">
      <router-link to="/picking" class="myLink">拣货进度</router-link>
      <router-link to="/pickingReplenishment" class="myLink active">拣货补货进度</router-link>
      <router-link to="/workload" class="myLink">工作量</router-link>
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

    <div class="replenishBox replenishBoxTittle">
      <div class="replenishBoxLine1">
        上海会员物流拣货补货进度
        <div class="dateBox">
          <dater/>
        </div>
      </div>

      <div class="replenishBoxLine replenishBoxLineHeight">
        <div class="replenishBoxLineL">
          <div class="replenishBoxLine_title">
            <div>当日拣货任务汇总</div>
          </div>
          <div class="replenishBoxLine_con">
            <el-row :gutter="10">
              <el-col :span="6">
                <card
                  :data1="line1.total.sku"
                  :data2="line1.total.e"
                  title="任务总量"
                  text1="SKU"
                  text2="E数"
                />
              </el-col>
              <el-col :span="6">
                <card
                  :data1="line1.finish.sku"
                  :data2="line1.finish.e"
                  title="已完成"
                  text1="SKU"
                  text2="E数"
                  state="1"
                />
              </el-col>
              <el-col :span="6">
                <card
                  :data1="line1.unfinish.sku"
                  :data2="line1.unfinish.e"
                  title="未完成"
                  text1="SKU"
                  text2="E数"
                  state="2"
                />
              </el-col>
              <el-col :span="6">
                <card
                  :data1="line1.abnormal.sku"
                  :data2="line1.abnormal.e"
                  title="异常"
                  text1="SKU"
                  text2="E数"
                  state="3"
                />
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="replenishBoxLineR">
          <pie2 :chartData="chartData1"/>
        </div>
      </div>

      <div class="replenishBoxLine replenishBoxLineHeight">
        <div class="replenishBoxLineL">
          <div class="replenishBoxLine_title">
            <div>DC拣货任务</div>
          </div>
          <div class="replenishBoxLine_con">
            <el-row :gutter="10">
              <el-col :span="6">
                <card
                  :data1="line2.total.sku"
                  :data2="line2.total.e"
                  title="任务总量"
                  text1="SKU"
                  text2="E数"
                />
              </el-col>
              <el-col :span="6">
                <card
                  :data1="line2.finish.sku"
                  :data2="line2.finish.e"
                  title="已完成"
                  text1="SKU"
                  text2="E数"
                  state="1"
                />
              </el-col>
              <el-col :span="6">
                <card
                  :data1="line2.unfinish.sku"
                  :data2="line2.unfinish.e"
                  title="未完成"
                  text1="SKU"
                  text2="E数"
                  state="2"
                />
              </el-col>
              <el-col :span="6">
                <card
                  :data1="line2.abnormal.sku"
                  :data2="line2.abnormal.e"
                  title="异常"
                  text1="SKU"
                  text2="E数"
                  state="3"
                />
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="replenishBoxLineR">
          <pie2 :chartData="chartData2"/>
        </div>
      </div>

      <div class="replenishBoxLine replenishBoxLineHeight">
        <div class="replenishBoxLineL">
          <div class="replenishBoxLine_title">
            <div>AGV拣货任务</div>
          </div>
          <div class="replenishBoxLine_con">
            <el-row :gutter="10">
              <el-col :span="6">
                <card
                  :data1="line3.total.sku"
                  :data2="line3.total.e"
                  title="任务总量"
                  text1="SKU"
                  text2="E数"
                />
              </el-col>
              <el-col :span="6">
                <card
                  :data1="line3.finish.sku"
                  :data2="line3.finish.e"
                  title="已完成"
                  text1="SKU"
                  text2="E数"
                  state="1"
                />
              </el-col>
              <el-col :span="6">
                <card
                  :data1="line3.unfinish.sku"
                  :data2="line3.unfinish.e"
                  title="未完成"
                  text1="SKU"
                  text2="E数"
                  state="2"
                />
              </el-col>
              <el-col :span="6">
                <card
                  :data1="line3.abnormal.sku"
                  :data2="line3.abnormal.e"
                  title="异常"
                  text1="SKU"
                  text2="E数"
                  state="3"
                />
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="replenishBoxLineR">
          <pie2 :chartData="chartData3"/>
        </div>
      </div>

      <div class="replenishBoxLine replenishBoxLineHeight">
        <div class="replenishBoxLineL">
          <div class="replenishBoxLine_title">
            <div>DC补货任务</div>
          </div>
          <div class="replenishBoxLine_con">
            <el-row :gutter="10">
              <el-col :span="6">
                <card
                  :data1="line4.total.sku"
                  :data2="line4.total.e"
                  title="任务总量"
                  text1="SKU"
                  text2="E数"
                />
              </el-col>
              <el-col :span="6">
                <card
                  :data1="line4.finish.sku"
                  :data2="line4.finish.e"
                  title="已完成"
                  text1="SKU"
                  text2="E数"
                  state="1"
                />
              </el-col>
              <el-col :span="6">
                <card
                  :data1="line4.unfinish.sku"
                  :data2="line4.unfinish.e"
                  title="未完成"
                  text1="SKU"
                  text2="E数"
                  state="2"
                />
              </el-col>
              <el-col :span="6">
                <card
                  :data1="line4.abnormal.sku"
                  :data2="line4.abnormal.e"
                  title="异常"
                  text1="SKU"
                  text2="E数"
                  state="3"
                />
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="replenishBoxLineR">
          <pie2 :chartData="chartData4"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pie2 from "../components/pie2.vue";
import dater from "../components/Dater.vue";
import card from "../components/card.vue";
import axios from "axios";
import _ from "lodash";

export default {
  name: "app",
  components: {
    pie2,
    dater,
    card
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

      line1: {
        total: {
          e: 1,
          sku: 0
        },
        finish: {
          e: 0,
          sku: 0
        },
        unfinish: {
          e: 0,
          sku: 0
        },
        abnormal: {
          e: 0,
          sku: 0
        }
      },
      line2: {
        total: {
          e: 2,
          sku: 0
        },
        finish: {
          e: 0,
          sku: 0
        },
        unfinish: {
          e: 0,
          sku: 0
        },
        abnormal: {
          e: 0,
          sku: 0
        }
      },
      line3: {
        total: {
          e: 3,
          sku: 0
        },
        finish: {
          e: 0,
          sku: 0
        },
        unfinish: {
          e: 0,
          sku: 0
        },
        abnormal: {
          e: 0,
          sku: 0
        }
      },
      line4: {
        total: {
          e: 4,
          sku: 0
        },
        finish: {
          e: 0,
          sku: 0
        },
        unfinish: {
          e: 0,
          sku: 0
        },
        abnormal: {
          e: 0,
          sku: 0
        }
      },

      chartData1: {
        chartId: "id001",
        titleText: "",
        seriesData: [
          { value: 2, name: "已完成" },
          { value: 1, name: "未完成" },
          { value: 2, name: "异常" }
        ]
      },
      chartData2: {
        chartId: "id002",
        titleText: "",
        seriesData: [
          { value: 2, name: "已完成" },
          { value: 1, name: "未完成" },
          { value: 0, name: "异常" }
        ]
      },
      chartData3: {
        chartId: "id003",
        titleText: "",
        seriesData: [
          { value: 2, name: "已完成" },
          { value: 1, name: "未完成" },
          { value: 0, name: "异常" }
        ]
      },
      chartData4: {
        chartId: "id004",
        titleText: "",
        seriesData: [
          { value: 2, name: "已完成" },
          { value: 1, name: "未完成" },
          { value: 0, name: "异常" }
        ]
      }
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
      //webpack对 "http://localhost:8080/epimetheus/api/diy/report/queryReportByCode/2" 代理，
      //代理访问   "http://localhost:3000/epimetheus/api/diy/report/queryReportByCode/2"
      //匹配的规则是 '/epimetheus/api'
      axios
        .post("/epimetheus/api" + "/diy/report/querySingleReportByCode/", {
          code: "pickingTaskTotal"
        })
        .then(response => {
          var obj = _.keyBy(response.data, function(o) {
            return o.code;
          });
          this.line1 = obj;
          this.chartData1.seriesData[0].value = obj.finish.sku;
          this.chartData1.seriesData[1].value = obj.unfinish.sku;
          this.chartData1.seriesData[2].value = obj.abnormal.sku;
        });

      axios
        .post("/epimetheus/api" + "/diy/report/querySingleReportByCode/", {
          code: "DC-Picking"
        })
        .then(response => {
          var obj = _.keyBy(response.data, function(o) {
            return o.code;
          });
          this.line2 = obj;
          this.chartData2.seriesData[0].value = obj.finish.sku;
          this.chartData2.seriesData[1].value = obj.unfinish.sku;
          this.chartData2.seriesData[2].value = obj.abnormal.sku;
        });

      axios
        .post("/epimetheus/api" + "/diy/report/querySingleReportByCode/", {
          code: "AGV-Picking"
        })
        .then(response => {
          var obj = _.keyBy(response.data, function(o) {
            return o.code;
          });
          this.line3 = obj;
          this.chartData3.seriesData[0].value = obj.finish.sku;
          this.chartData3.seriesData[1].value = obj.unfinish.sku;
          this.chartData3.seriesData[2].value = obj.abnormal.sku;
        });

      axios
        .post("/epimetheus/api" + "/diy/report/querySingleReportByCode/", {
          code: "DC-Replenish"
        })
        .then(response => {
          var obj = _.keyBy(response.data, function(o) {
            return o.code;
          });
          this.line4 = obj;
          this.chartData4.seriesData[0].value = obj.finish.sku;
          this.chartData4.seriesData[1].value = obj.unfinish.sku;
          this.chartData4.seriesData[2].value = obj.abnormal.sku;
        });
    }
  },
  mounted: function() {
    this.refreshData();
    this.intervalID = setInterval(() => {
      this.refreshData();
    }, this.refreshTime * 1000 * 60);
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

.replenishBox {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.replenishBoxLine {
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: 0 47px;
  background-color: #ffffff;
  box-shadow: 0px 5px 5px 0px rgba(187, 194, 225, 0.22);
  border-radius: 10px;
  border: solid 1px #e5e5e5;
  .replenishBoxLineL {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .replenishBoxLine_title {
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 18px;
      color: #333333;
    }
    .replenishBoxLine_con {
      height: 65%;
      //border:solid 1px red;
      .el-row {
        height: 100%;
        .el-col {
          height: 100%;
          .cardBox {
            //height: 100%;
            height: 115px;
          }
        }
      }
    }
  }
  .replenishBoxLineR {
    width: 20%;
  }
}
.replenishBoxLine1 {
  text-align: center;
  width: 100%;
  height: 10%;
  border: none;
  font-size: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.replenishBoxLineHeight {
  height: 20%;
}
.replenishBoxTittle {
  position: relative;
}
</style>
