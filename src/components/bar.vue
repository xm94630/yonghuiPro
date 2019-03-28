<template>
    <div class="bingTuBox" id="bingTu"></div>
</template>


<script>
import echarts from 'echarts'

//获取饼图option配置
function getOption(percent){
	let option = {
				title:{
			show:true,
			text:"总体进度",
			x:"left",
			textStyle:{
				fontSize:"12",
				color:"#666",
				//fontWeight:"bold",
			}
		},
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00','7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00','14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00', '24:00']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,1220, 932, 901, 934, 1290, 330, 120,820, 932, 901, 934],
        type: 'line',
        areaStyle: {}
    }]
	};

  return option
}

export default {
  name: 'pie',
  props: {
    percent:Number
  },
  data(){
    return{
        bingTu_option:getOption(this.percent)
    }
  },
  mounted: function () {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('bingTu'))
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



