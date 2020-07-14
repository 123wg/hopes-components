const testRoutes = {
    path: '/test',
    name: 'test',
    component: () => import('@/views/Home.vue'),
    meta: {
        title: '测试',
    },
    redirect: 'test1',
    children: [
        {
            path: 'test1',
            name: 'test1',
            component: () => import('@/components/test/Test1.vue'),
            meta: {
                title: '测试2',
            },
        },
        {
            path: 'test2',
            name: 'test2',
            component: () => import('@/components/test/Test2.vue'),
            meta: {
                title: '测试2',
            },
        },
    ],
};

export default testRoutes;
