import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  //路由模式
  history: createWebHistory(),
  //路由的配置选项，routes为单独引进的
  routes,
  //路由导航让页面滚动到顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

//前置守卫
router.beforeEach((to, from, next) => {
  //动态设置网页左上角的标题
  document.title = to.meta.title || import.meta.env.VITE_APP_TITLE;
  //...判断登录token逻辑
  next();
});

export default router;
