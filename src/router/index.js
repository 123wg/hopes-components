import Vue from 'vue';
import VueRouter from 'vue-router';
import pageRoutes from '@/router/modules/page';
import tableRoutes from '@/router/modules/table';
import dragRoutes from '@/router/modules/drag';
import testRoutes from '@/router/modules/test';
import cesiumRoute from '@/router/modules/cesium';
// import treeRoutes from '@/router/modules/tree';
import Layout from '../views/Home.vue';

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

const routes = [
    {
        path: '',
        name: 'index',
        component: Layout,
        redirect: 'index',
        children: [
            {
                path: 'index',
                name: 'Home',
                component: () => import('@/components/index/Index.vue'),
                meta: {
                    title: '首页',
                },
            },
        ],
    },
    dragRoutes,
    pageRoutes,
    tableRoutes,
    testRoutes,
    cesiumRoute,
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
