import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import './assets/css/main.css'
import './assets/css/index.css'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'


import echarts from 'echarts'
Vue.prototype.$echarts = echarts
 



Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router
}).$mount('#app')
