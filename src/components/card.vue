<template>
	<div class="cardBox">
		<div class="cardBoxT">{{title}}</div>
		<div class="cardBoxM">
			<div>{{cardData[0].value || 999}}</div> 
			<div>{{cardData[1].value || 999}}</div> 
		</div>
		<div class="cardBoxB">
			<div>{{cardData[0].name || text1}}</div> 
			<div>{{cardData[1].name || text2}}</div> 
		</div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
		title:String,
		text1:String,
		text2:String,
		cardData:Object,
  },
  data(){},
  mounted: function () {}
}
</script>

<style lang="scss">
//卡片的全部样式
.cardBox{
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  text-align:center;
  border:solid 1px #666;
  box-sizing:border-box;  
  padding:5px;
  .cardBoxT{
    height:30%;
    font-size:20px;
    font-weight:bold;
  }
  .cardBoxM{
    display:flex;
    justify-content: space-around;
    height:50%; 
    font-size:35px;
    font-weight:bold;
  }
  .cardBoxB{
    display:flex;
    justify-content: space-around;
    height:30%;
  }
}
</style>