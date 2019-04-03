<template>
  <div class="myBox page1">
    <div class="HeadTitle">
      <router-link to="/picking" class="myLink active">拣货进度</router-link>
      <router-link to="/pickingReplenishment" class="myLink">拣货补货进度</router-link>
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
                  <card
                    :data1="total.SKU.finish"
                    :data2="total.SKU.total"
                    title="SKU"
                    text1="完成数"
                    text2="总数"
                  />
                </el-col>
                <el-col :span="8">
                  <card
                    :data1="total.E.finish"
                    :data2="total.E.total"
                    title="E数"
                    text1="完成数"
                    text2="总数"
                  />
                </el-col>

                <el-col :span="8">
                  <card
                    :data1="total.shop.finish"
                    :data2="total.shop.total"
                    title="门店数"
                    text1="完成数"
                    text2="总数"
                  />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="linesBox borderBox MT30">
      <template v-for="(one,index) in lines">
        <div class="oneLine" :key="index">
          <el-row :gutter="10" :key="index">
            <el-col :span="1">
              <div class="borderBox lineName">线路{{index+1}}</div>
            </el-col>

            <el-col :span="4">
              <card
                :data1="one.SKU.finish"
                :data2="one.SKU.total"
                title="SKU"
                text1="完成数"
                text2="总数"
              />
            </el-col>

            <el-col :span="4">
              <card
                :data1="one.SKU.finish"
                :data2="one.SKU.total"
                title="E数"
                text1="完成数"
                text2="总数"
              />
            </el-col>

            <el-col :span="4">
              <card
                :data1="one.SKU.finish"
                :data2="one.SKU.total"
                title="门店数"
                text1="完成数"
                text2="总数"
              />
            </el-col>

            <el-col :span="11">
              <div class="borderBox">
                <template v-for="(oneShop,index) in one.shopState">
                  <template v-if="oneShop.state === 0">
                    <div class="miniCard shopUnFinish" :key="index">{{oneShop.name}}</div>
                  </template>
                  <template v-else-if="oneShop.state === 1">
                    <div class="miniCard shopOnGoing" :key="index">{{oneShop.name}}</div>
                  </template>
                  <template v-else>
                    <div class="miniCard shopFinish" :key="index">{{oneShop.name}}</div>
                  </template>
                </template>
              </div>
            </el-col>
          </el-row>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import addBtn from "../components/addBtn.vue";
import pie from "../components/pie.vue";
import dater from "../components/Dater.vue";
import axios from "axios";
import card from "../components/card.vue";

import config from "../../vue.config";
let baseUrl = config.baseUrl || "";

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
    selectChange: function(v) {
      clearInterval(this.intervalID);
      this.intervalID = setInterval(() => {
        this.refreshData();
      }, v * 1000 * 60);
    },
    refreshData: function() {
      //如果开启代理模式的话：
      //webpack对 "http://localhost:8080/epimetheus/api/diy/report/queryReportByCode" 代理，
      //代理访问   "http://localhost:3000/epimetheus/api/diy/report/queryReportByCode"
      //匹配的规则是 '/epimetheus/api'

      //饼图
      axios
        .post(
          baseUrl +
            "/epimetheus/api/diy/report/querySingleReportByCode?code=totalProgress"
        )
        .then(response => {
          this.chartData.percent = response.data.data.data;
        });

      //sku
      axios
        .post(
          baseUrl +
            "/epimetheus/api/diy/report/querySingleReportByCode?code=total-SKU"
        )
        .then(response => {
          this.total.SKU.total = response.data.data.total;
          this.total.SKU.finish = response.data.data.finish;
        });

      //e
      axios
        .post(
          baseUrl +
            "/epimetheus/api/diy/report/querySingleReportByCode?code=total-E"
        )
        .then(response => {
          this.total.E.total = response.data.data.total;
          this.total.E.finish = response.data.data.finish;
        });

      //shop
      axios
        .post(
          baseUrl +
            "/epimetheus/api/diy/report/querySingleReportByCode?code=total-Shop"
        )
        .then(response => {
          this.total.shop.total = response.data.data.total;
          this.total.shop.finish = response.data.data.finish;
        });

      //各行
      axios
        .post(
          baseUrl +
            "/epimetheus/api/diy/report/querySingleReportByCode?code=lines"
        )
        .then(response => {
          let linesData = response.data.data;
          //店面数据，最多只保留前面16条
          linesData.forEach(function(one, i) {
            one.shopState = one.shopState.slice(0, 16);
          });
          this.lines = linesData;
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
        background-color: #ffffff;
        box-shadow: 0px 5px 5px 0px rgba(187, 194, 225, 0.22);
        border-radius: 10px;
        border: solid 1px #e5e5e5;

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
  height: 636px;
  background-color: #ffffff;
  box-shadow: 0px 5px 5px 0px rgba(187, 194, 225, 0.22);
  border-radius: 10px;
  border: solid 1px #e5e5e5;
  overflow: hidden;

  .oneLine {
    height: 120px;
    overflow: hidden;
    border-bottom: solid 1px #eee;

    .cardBox {
      height: 100px;
      margin-top: 10px;
      .cardBoxM {
        font-size: 30px;
      }
    }
  }
  .oneLine:nth-child(even) {
    //background: #eee;
  }

  .lineName {
    text-align: center;
  }
  .borderBox {
    height: 130px;
    padding: 10px;
    box-sizing: border-box;
    border: none;
  }
}
.linesList:nth-child(odd) {
  background: #f3f3f3;
}

.miniCard {
  display: inline-block;
  width: 90px;
  height: 43px;
  line-height: 43px;
  margin: 0 10px 10px 0;
  background: #ccc;
  text-align: center;
  overflow: hidden;
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
  color: #599ef8;
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
