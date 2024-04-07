import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    //重定向
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true, //是否缓存路由
    },
    component: () => import('@/pages/home/index.vue'),
  },
  {
    name: 'NoFind',
    path: '/:pathMatch(.*)*',
    component: () => import('@/components/Error/404.vue'),
  },
];
export default routes;
