const tableRoutes = {
    path: '/table',
    name: 'table',
    component: () => import('@/views/Home.vue'),
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
};
export default tableRoutes;
