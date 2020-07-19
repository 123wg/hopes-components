const cesiumRoute = {
    path: '/cesium',
    name: 'cesium',
    component: () => import('@/views/Home.vue'),
    redirect: 'cesium1',
    children: [
        {
            path: 'cesium1',
            name: 'cesium',
            component: () => import('@/views/Cesium.vue'),
            meta: {
                title: '地球',
            },
        },
    ],
};

export default cesiumRoute;
