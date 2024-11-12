import { createApp } from 'vue';
import { setupRouter } from '@/router'; //引入路由
import '@/styles/css/index.css'; //引入全局样式
import { setupGlobCom } from '@/components'; // 引入全局组件
import App from './App.vue';
import { setupStore } from './store';
import { setupAppVersionNotification } from './plugins/setupAppVersionNotification';

const setupApp = async () => {
  const app = createApp(App);

  await setupRouter(app);

  setupGlobCom(app);

  setupStore(app);

  setupAppVersionNotification();

  app.mount('#app');
};

setupApp();
