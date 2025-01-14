import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';

import { setupHtmlPlugin } from './build/plugins/html';
import { getBuildTime } from './build/utils/time';
import pkg from './package.json';

export default defineConfig(({ mode }) => {
  // 获取`.env`环境配置文件
  const env = loadEnv(mode, process.cwd());
  // 获取构建时间
  const buildTime = getBuildTime();
  return {
    base: env.VITE_BASE_PATH,
    define: {
      BUILD_TIME: JSON.stringify(buildTime),
      APP_VERSION: JSON.stringify(pkg.version),
    },
    plugins: [
      vue(),
      vueJsx(),
      setupHtmlPlugin(buildTime),
      checker({
        vueTsc: true,
        typescript: true,
        eslint: {
          useFlatConfig: true,
          lintCommand: 'eslint "./src/**/*.{vue,ts,tsx}"',
        },
      }),
      // // 自动 IDE 并将光标定位到 DOM 对应的源代码位置。see: https://inspector.fe-dev.cn/guide/start.html
      // // vue的更推荐使用vue-devtools
      // codeInspectorPlugin({
      //   bundler: "vite"
      // })
    ],
    resolve: {
      alias: {
        '@': path.resolve(fileURLToPath(new URL('.', import.meta.url)), 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `@use "@/styles/scss/index.scss" as *;`, // 引入全局scss变量、方法等
        },
      },
    },
    // 反向代理解决跨域问题
    server: {
      // open: true,// 运行时自动打开浏览器
      host: '0.0.0.0', // 局域网别人也可访问
      port: Number(env.VITE_APP_PORT), //端口号
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVER_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
        },
      },
    },
    //打包配置
    esbuild: {
      pure: env.VITE_NODE_ENV === 'development' ? ['console.log', 'debugger'] : [],
    },
    build: {
      target: 'es2015',
      outDir: env.VITE_OUT_DIR || 'dist',
      // 禁用 gzip 压缩大小报告，可略微减少打包时间
      reportCompressedSize: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            // 第三方库打包成一个.js中，页面加载时可缓存加载
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
    // 预构建（默认就会把node_modules的预构建，一般情况不用写，除非预构建自己写的公共组件代码）
    optimizeDeps: {
      include: ['/node_modules/'],
    },
  };
});
