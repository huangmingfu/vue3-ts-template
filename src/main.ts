import { createApp } from 'vue';

// 引入版本更新提示
import { setupAppVersionNotification } from '@/plugins/setupAppVersionNotification';
// 引入全局组件
import { setupGlobCom } from '@/plugins/setupGlobCom';
//引入路由
import { setupRouter } from '@/router';
// 引入状态管理
import { setupStore } from '@/store';
//引入公共样式
import '@/styles/css/index.css';

import App from './App.vue';

const setupApp = async () => {
  // 创建Vue应用实例
  const app = createApp(App);

  // 配置并初始化路由
  await setupRouter(app);

  // 设置全局组件
  setupGlobCom(app);

  // 配置pinia状态管理
  setupStore(app);

  // 设置应用版本更新通知
  setupAppVersionNotification();

  // 挂载Vue应用到DOM
  app.mount('#app');
};

setupApp();
