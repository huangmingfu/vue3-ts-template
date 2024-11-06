import { createApp } from 'vue';
import { setupRouter } from '@/router'; //引入路由
import '@/styles/common.scss'; //引入全局样式
import { setupGlobCom } from '@/components'; // 引入全局组件
import App from './App.vue';
import { setupStore } from './store';

const setupAll = () => {
  const app = createApp(App);

  setupRouter(app);

  setupGlobCom(app);

  setupStore(app);

  app.mount('#app');
};

setupAll();
