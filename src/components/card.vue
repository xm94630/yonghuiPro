

<template>
	<div class="cardBox">
		<div class="cardBoxT">SKU</div>
		<div class="cardBoxM">
			<div>8888</div> 
			<div>8888</div> 
		</div>
		<div class="cardBoxB">
			<div>完成数</div> 
			<div>总数</div> 
		</div>
  </div>
</template>


<script>
export default {
  name: 'pie',
  props: {
		chartData:Object,
  },
  data(){
    return{
        bingTu_option:123,
    }
  },
  mounted: function () {
  }
}
</script>


<style lang="scss">

</style>



