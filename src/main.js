import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import './assets/css/main.css'
import './assets/css/index.css'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'

//echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
 
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' //这个还是要有的，比如分页的点点的样式什么的
Vue.use(VueAwesomeSwiper)



Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router
}).$mount('#app')
