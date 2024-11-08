import type { RouteRecordRaw } from 'vue-router'

interface RouteMetaCustom extends Record<string | number | symbol, unknown> {
  title?: string
  keepAlive?: boolean
}

declare module 'vue-router' {
  interface RouteMeta extends RouteMetaCustom {}
}
