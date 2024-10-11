import { createApp } from 'vue'
import router from '@/router/index' //引入路由
import '@/styles/common.scss' //引入全局样式
import { setupGlobCom } from '@/components' // 引入全局组件
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(setupGlobCom) // setupGlobCom(app);
app.mount('#app')
