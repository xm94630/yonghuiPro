<template>
  <div class="myBox">
      
      <div class="HeadTitle">
        <router-link to="/picking" class="myLink">拣货进度</router-link>
        <router-link to="/pickingReplenishment" class="myLink">拣货补货进度</router-link>
        <router-link to="/workload" class="myLink">工作量</router-link>
      </div>

  </div>
</template>

<script>
import addBtn from '../components/addBtn.vue'

export default {
  name: 'app',
  components: {
    addBtn
  },
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss">
.myBox{
  width:1080px;
  height:607.5px;
  margin:0 auto;
  border:solid 1px #000;
  background:#fff;
  padding:0 30px;
}
.HeadTitle{
  width:100%;
  height:40px;
  line-height:40px;
  font-weight: bold;
  .myLink{
    margin-right:30px;
  }
}


// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

.el-container {
  height: 100%;
}

.el-header{
  background:lightseagreen;
  font-size:20px;
  color:#fff;
}

.a{
  color:#111;
  .b{
    color:#bbb
  }
}
</style>
