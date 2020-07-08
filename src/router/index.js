import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views/Home.vue';

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

const routes = [
    {
        path: '/',
        name: 'index',
        component: Layout,
        redirect: '/index',
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
    {
        path: '/table',
        name: 'table',
        component: Layout,
        meta: {
            title: '表单',
        },
        redirect: 'table1',
        children: [
            {
                path: 'table1',
                name: 'index',
                component: () => import('@/components/table/Table1.vue'),
                meta: {
                    title: '表单1',
                },
            },
            {
                path: 'table2',
                name: 'index',
                component: () => import('@/components/table/Table2.vue'),
                meta: {
                    title: '表单2',
                },
            },

        ],
    },
    {
        path: '/page',
        name: 'page',
        component: Layout,
        meta: {
            title: '分页',
        },
        redirect: 'page1',
        children: [
            {
                path: 'page1',
                name: 'page1',
                component: () => import('@/components/page/Page1.vue'),
                meta: {
                    title: '表单1',
                },
            },
            {
                path: 'page2',
                name: 'page2',
                component: () => import('@/components/page/Page2.vue'),
                meta: {
                    title: '表单2',
                },
            },

        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
