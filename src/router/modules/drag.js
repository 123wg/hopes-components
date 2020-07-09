const dragRoutes = {
    path: '/drag',
    name: 'drag',
    component: () => import('@/views/Home.vue'),
    meta: {
        title: '拖拽',
    },
    redirect: 'drag1',
    children: [
        {
            path: 'drag1',
            name: 'drag',
            component: () => import('@/components/drag/HopesSimpleDrag.vue'),
            meta: {
                title: '简单拖拽',
            },
        },
        {
            path: 'drag2',
            name: 'drag',
            component: () => import('@/components/drag/Drag2.vue'),
            meta: {
                title: '拖拽2',
            },
        },
    ],
};

export default dragRoutes;
