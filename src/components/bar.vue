<template>
    <div class="bingTuBox" :id="chartData.chartId"></div>
</template>


<script>
import echarts from 'echarts'

//获取饼图option配置
function getOption(data){
  let option = {
    title:{
			show:true,
			text:data.titleText,
			x:"left",
			textStyle:{
				fontSize:"12",
				color:"#666",
				//fontWeight:"bold",
			}
		},
    xAxis: {
        type: 'category',
        data: ['甲', '乙', '丙', '丁','甲', '乙', '丙', '丁']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80,120, 100, 150, 80],
        type: 'bar'
    }]
  };


  return option
}

export default {
  name: 'pie',
  props: {
    percent:Number,
    chartData:Object
  },
  data(){
    return{
        bingTu_option:getOption(this.chartData)
    }
  },
  mounted: function () {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById(this.chartData.chartId))
    myChart.setOption(this.bingTu_option)
  }
}
</script>


<style scoped>
.bingTuBox{
  width: 100%;
  height: 100%;
}
</style>



