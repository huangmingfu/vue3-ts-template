import { createApp } from 'vue';

// 引入全局组件
import { setupAppVersionNotification } from '@/plugins/setupAppVersionNotification';
//引入路由
import { setupGlobCom } from '@/plugins/setupGlobCom';
//引入公共样式
import { setupRouter } from '@/router';
import '@/styles/css/index.css';

// 引入状态管理
import App from './App.vue';
// 引入版本更新提示
import { setupStore } from './store';

const setupApp = async () => {
  const app = createApp(App);

  await setupRouter(app);

  setupGlobCom(app);

  setupStore(app);

  setupAppVersionNotification();

  app.mount('#app');
};

setupApp();
