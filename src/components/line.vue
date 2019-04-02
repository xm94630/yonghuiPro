<template>
    <div class="bingTuBox" :id="chartData.chartId"></div>
</template>


<script>
import echarts from 'echarts'

//获取饼图option配置
function getOption(data){
	let option = {
    color: ["#fd9f82",],
		title:{
			show:true,
			text:data.titleText,
			x:"left",
			textStyle:{
				fontSize:"18",
				color:"#666",
				//fontWeight:"bold",
			}
		},
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.xAxisData,
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: data.seriesData,
        type: 'line',
        areaStyle: {}
    }]
	};

  return option
}

export default {
  name: 'pie',
  props: {
    percent:Number,
    chartData:Object,
  },
  data(){
    return{
        bingTu_option:getOption(this.chartData),
        myChart:null
    }
  },
  mounted: function () {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById(this.chartData.chartId))
    this.myChart.setOption(this.bingTu_option)
  },
  watch: {
    'chartData': {
      handler:function (val, oldVal) {
        this.myChart.setOption(getOption(val))
      },
      deep: true
    },
  }
}
</script>


<style scoped>
.bingTuBox{
  width: 100%;
  height: 100%;
}
</style>



