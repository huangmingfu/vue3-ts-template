import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { App } from 'vue';

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
  next();
});

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};

export default router;

/**
// 批量导入路由
const modules = import.meta.glob('./modules/*.js', { eager: true })
console.log(modules)
const patchRouters = Object.keys(modules).map(key => modules[key].default).flat()
console.log(patchRouters)


const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  ...patchRouters,
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]

 */
