import { RouteRecordRaw } from 'vue-router';

//  meta含义
//  title   ------------------> 标题
//  keepAlive   ------------------> 是否缓存

const routes: Array<RouteRecordRaw> = [
  {
    //重定向
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true //是否缓存路由
    },
    component: () => import('@/views/home/index.vue')
  },
  {
    name: 'NoFind',
    path: '/:pathMatch(.*)*',
    component: () => import('@/components/Error/404.vue')
  }
];
export default routes;
