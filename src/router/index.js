import { createRouter, createMemoryHistory , createWebHashHistory } from "vue-router";

const routes = [
    {
        path:'/',
        redirect: '/home'
    },
    {
        path: '/login',
        name:'登录',
        component: ()=>import('@/views/login/index.vue')
    },
    {
        path: '/home',
        name:'首页',
        component: ()=>import('@/views/home/index.vue')
    },
    {
        path: '/example',
        name:'实例',
        component: ()=>import('@/components/layout/index.vue'),
        redirect: '/example/index',
        children:[
            {
                path:'/example/index',
                name:'实例首页',
                component: ()=>import('@/views/example/index.vue')
            },
            {
                path:'/example/pinia',
                name:'Pinia实例',
                component: ()=>import('@/views/example/pinia.vue')
            }
        ]
    },
    {
        path:'/test',
        name:'实验场',
        component: ()=>import('@/views/test/index.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: ()=>import('@/views/error-page/404.vue')
    },
    {
        path: '/403',
        name:'403',
        component: ()=>import('@/views/error-page/403.vue')
    },
    {
        path: '/500',
        name:'500',
        component: ()=>import('@/views/error-page/500.vue')
    },
    {
        path: '/success',
        name:'success',
        component: ()=>import('@/views/result-page/success.vue')
    },
    {
        path: '/info',
        name:'info',
        component: ()=>import('@/views/result-page/info.vue')
    },
    {
        path: '/warning',
        name:'warning',
        component: ()=>import('@/views/result-page/warning.vue')
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;
