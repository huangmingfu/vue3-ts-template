import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig(({ mode }) => {
  // 获取`.env`环境配置文件
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      vueJsx(),
      //替换网站标题
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_TITLE
          }
        }
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          // additionalData: '@import "./src/styles/var.scss";' // 引入全局scss变量
          additionalData: `@use "@/styles/global.scss" as *;` // 引入全局scss变量、方法等
        }
      }
    },
    // 反向代理解决跨域问题
    server: {
      // open: true,// 运行时自动打开浏览器
      host: '0.0.0.0', // 局域网别人也可访问
      port: Number(env.VITE_APP_PORT), //端口号
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_SERVICE_API,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
        }
      }
    },
    //打包配置
    esbuild: {
      pure: env.VITE_DROP_CONSOLE === 'true' ? ['console.log'] : undefined,
      drop: env.VITE_DROP_DEBUGGER === 'true' ? ['debugger'] : undefined
    },
    build: {
      target: 'es2015',
      outDir: env.VITE_OUT_DIR || 'dist',
      sourcemap: env.VITE_SOURCEMAP === 'true',
      rollupOptions: {
        output: {
          manualChunks(id) {
            // 第三方库打包成一个.js中，页面加载时可缓存加载
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
        }
      }
    }
  }
})
