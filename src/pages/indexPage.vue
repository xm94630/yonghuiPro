<template>
  <div class="myBox page1">
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
                <dater/>
              </div>
            </div>
            <div class="totalBoxRB">
              <el-row :gutter="30">
                <el-col :span="8">
                  <card :data1="122" :data2="133" title="SKU" text1="完成数" text2="总数"/>
                </el-col>
                <el-col :span="8">
                  <card :data1="222" :data2="333" title="E数" text1="完成数" text2="总数"/>
                </el-col>

                <el-col :span="8">
                  <card :data1="444" :data2="555" title="门店数" text1="完成数" text2="总数"/>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="linesBox borderBox MT30">
      <el-row :gutter="10">
        <el-col :span="1">
          <div class="borderBox lineName">001</div>
        </el-col>

        <el-col :span="4">
          <card :data1="444" :data2="555" title="SKU" text1="完成数" text2="总数"/>
        </el-col>

        <el-col :span="4">
          <card :data1="444" :data2="555" title="E数" text1="完成数" text2="总数"/>
        </el-col>

        <el-col :span="4">
          <card :data1="444" :data2="555" title="门店数" text1="完成数" text2="总数"/>
        </el-col>

        <el-col :span="11">
          <div class="borderBox">
            <div class="miniCard shopUnFinish">123</div>
            <div class="miniCard shopOnGoing">222</div>
            <div class="miniCard shopFinish">333</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import addBtn from "../components/addBtn.vue";
import pie from "../components/pie.vue";
import dater from "../components/Dater.vue";
import axios from "axios";
import card from "../components/card.vue";

export default {
  name: "app",
  components: {
    pie,
    dater,
    addBtn,
    card
  },
  data() {
    return {
      chartData: {
        chartId: "xxxyyy",
        titleText: "总体进度",
        percent: 0 //数据来自接口
      },

      //全部来自接口
      total: {
        SKU: {
          finish: 0,
          total: 0
        },
        E: {
          finish: 0,
          total: 0
        },
        shop: {
          finish: 0,
          total: 0
        }
      },

      //数据全部来自接口
      lines: [
        {
          SKU: {
            finish: 0,
            total: 0
          },
          E: {
            finish: 0,
            total: 0
          },
          shop: {
            finish: 0,
            total: 0
          },
          shopState: [
            {
              name: "绍兴店",
              state: 0
            }
          ],
          lineName: "线路1"
        }
      ]
    };
  },
  methods: {
    refreshData: function() {
      //webpack对 "http://localhost:8080/epimetheus/api/diy/report/queryReportByCode" 代理，
      //代理访问   "http://localhost:3000/epimetheus/api/diy/report/queryReportByCode"
      //匹配的规则是 '/epimetheus/api'

      axios
        .post("/epimetheus/api" + "/diy/report/querySingleReportByCode/", {
          code: "totalProgress"
        })
        .then(response => {
          this.chartData.percent = response.data.data
        });

      // axios
      //   .get("/epimetheus/api" + "/diy/report/queryReportByCode")
      //   .then(response => {
      //     this.chartData.percent = response.data.total.rate.data;
      //     this.total = response.data.total;
      //     this.lines = response.data.lines;
      //   });
    }
  },
  mounted: function() {
    this.refreshData();
  }
};
</script>

<style lang="scss">
.HeadTitle {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-weight: bold;
  .myLink {
    margin-right: 30px;
  }
}
.totalBox {
  height: 320px;
  width: 100%;
  .totalBoxL {
    height: 320px;
    background-color: #ffffff;
    box-shadow: 0px 5px 5px 0px rgba(187, 194, 225, 0.22);
    border-radius: 10px;
    border: solid 1px #e5e5e5;
  }
  .totalBoxR {
    height: 320px;
    .totalBoxRT {
      height: 160px;
      font-size: 50px;
      text-align: center;
      position: relative;
    }
    .totalBoxRB {
      .borderBox {
        height: 160px;
      }
      .cardBox {
        height: 160px;
        .cardBoxM {
          font-size: 50px;
        }
      }
    }
  }
}
.borderBox {
  border: solid 1px #666;
}

.linesBox {
  background: #fff;
  height: 666px;
  .lineName {
    text-align: center;
  }
  .borderBox {
    height: 130px;
    padding: 10px;
    box-sizing: border-box;
    border: none;
  }
  .cardBox {
    height: 110px;
    .cardBoxM {
      font-size: 30px;
    }
  }
}
.linesList:nth-child(odd) {
  background: #f3f3f3;
}

.miniCard {
  display: inline-block;
  width: 90px;
  height: 50px;
  line-height: 50px;
  margin: 0 10px 10px 0;
  background: #ccc;
  text-align: center;
}

.dateBox {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 12px;
}

.el-container {
  height: 100%;
}

.el-header {
  background: lightseagreen;
  font-size: 20px;
  color: #fff;
}

.a {
  color: #111;
  .b {
    color: #bbb;
  }
}

.myLink.active {
  color: red;
}

.shopUnFinish {
  background: #ccc;
}
.shopOnGoing {
  background: #f49999;
}
.shopFinish {
  background: #a6c87e;
}
</style>
