/// <reference types="vite/client" />

// 路由懒加载：component: () => import('@/components/Error/404.vue')，不加下面这个的话会报找不到模块的错误
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_NODE_ENV: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_BASE_PATH: string;
  readonly VITE_OUT_DIR: string;
  readonly VITE_APP_AUTO_UPDATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
