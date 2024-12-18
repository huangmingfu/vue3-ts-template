import type { RouteRecordRaw } from 'vue-router';

interface RouteMetaCustom extends Record<string | number | symbol, unknown> {
  title?: string; // 标题
  keepAlive?: boolean; // 是否缓存
  /**
   * 路由切换组件过渡动画名称
   * @see https://router.vuejs.org/zh/guide/advanced/transitions.html
   */
  transition?: string;
}

declare module 'vue-router' {
  interface RouteMeta extends RouteMetaCustom {
    required?: boolean;
  }
}
