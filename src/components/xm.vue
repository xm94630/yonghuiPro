
<template>
  <div>
    数据可视化学习——饼图
    <div style="width: 100%;height: 100%;" id="echartss"></div>
  </div>
</template>





<script>

//先要导入依赖的实例
import echarts from 'echarts'


let option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
}


export default {
  name: 'xm',
  props: {
    msg: String
  },
  data(){
    return{
        xxx:'大屏展示',
        echarts1_option:option
    }
  },

  mounted: function () {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('echartss'))
    // 绘制图表，this.echarts1_option是数据
    myChart.setOption(this.echarts1_option)
  },

}





</script>

<style scoped>
</style>
