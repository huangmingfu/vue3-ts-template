import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes';

const router = createRouter({
  //路由模式
  history: createWebHistory(),
  //路由的配置选项，routes为单独引进的
  routes,
  //路由导航让页面滚动到顶部
  scrollBehavior: () => ({ left: 0, top: 0 })
});

//前置守卫
router.beforeEach((to, _from, next) => {
  //动态设置网页左上角的标题
  document.title = to.meta.title || import.meta.env.VITE_APP_TITLE;

  //...判断登录token逻辑
  // const token = localStorage.getItem('token'); // useUserStore()
  // if (!token || !whiteList.includes(to.path)) {
  //   // 如果token不存在且不在白名单里面，就跳转到登录页面
  //   next({
  //     path: '/login',
  //     query: {
  //       redirect: encodeURIComponent(to.fullPath)
  //     }
  //   });
  //   return;
  // }

  // // 已登录有token，或者在白名单里
  // // 如果当前是登录页面就跳转到首页
  // if (to.path === 'login') {
  //   next({
  //     path: '/'
  //   });
  //   return;
  // }

  next();
});

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};

export default router;
