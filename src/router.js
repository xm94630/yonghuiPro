import Vue from 'vue';
import VueRouter from 'vue-router';
import pageA from './pages/a.vue';
import pageB from './pages/b.vue';
import createBigScreen from './pages/createBigScreen.vue';
import pageIndex from './pages/indexPage.vue';

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:pageIndex
    },{
        path:'/picking',
        component:pageA
    },{
        path:'/pickingReplenishment',
        component:pageB
    },{
        path:'/workload',
        component:createBigScreen
    }
]

const router = new VueRouter({
    routes
})

export default router

