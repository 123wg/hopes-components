const dragRoutes = {
    path: '/drag',
    name: 'drag',
    component: () => import('@/views/Home.vue'),
    redirect: 'drag1',
    children: [
        {
            path: 'drag1',
            name: 'drag',
            component: () => import('@/components/drag/HopesSimpleDrag.vue'),
            meta: {
                title: '拖拽组件',
            },
        },
    ],
};

export default dragRoutes;
