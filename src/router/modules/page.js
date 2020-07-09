const pageRoutes = {
    path: '/page',
    name: 'page',
    component: () => import('@/views/Home.vue'),
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
};
export default pageRoutes;
