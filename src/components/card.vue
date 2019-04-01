<template>
	<div class="cardBox">
		<div class="cardBoxT">{{title}}</div>
		<div class="cardBoxM">
			<div>{{(cardData&&cardData[0]&&cardData[0].value) || data1 || 999}}</div> 
			<div>{{(cardData&&cardData[1]&&cardData[1].value) || data2 || 999}}</div> 
		</div>
		<div class="cardBoxB">
			<div>{{(cardData&&cardData[0]&&cardData[0].name) || text1}}</div> 
			<div>{{(cardData&&cardData[0]&&cardData[0].name) || text2}}</div> 
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
		data1:Number,
		data2:Number,
		cardData:Object,
  },
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
  box-sizing:border-box;  
  padding:5px;
  background:#fff;
  border-radius: 5px;
  border: solid 1px #c0c0c0;
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