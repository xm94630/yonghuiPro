import Vue from 'vue';
import VueRouter from 'vue-router';
import pageB from './pages/b.vue';
import pageC from './pages/c.vue';
import pageIndex from './pages/indexPage.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: pageIndex
    }, {
        path: '/picking',
        component: pageIndex
    }, {
        path: '/pickingReplenishment',
        component: pageB
    }, {
        path: '/workload',
        component: pageC
    }
]

const router = new VueRouter({
    routes
})

export default router

