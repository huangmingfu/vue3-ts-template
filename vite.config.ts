import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import vueDevTools from 'vite-plugin-vue-devtools'
import { setupHtmlPlugin } from './build/plugins/html';
import { getBuildTime } from './build/utils/time';
import pkg from './package.json';

// import viteCompression from 'vite-plugin-compression'
// import viteImagemin from 'vite-plugin-imagemin'
// import { visualizer } from 'rollup-plugin-visualizer'

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
       vueDevTools(),
      // 打包分析
      // visualizer({
      //   open: true,
      //   gzipSize: true,
      //   brotliSize: true,
      //   filename: 'dist/stats.html' // 分析图生成的文件名及路径
      // }),
      // 压缩
      // viteCompression({
      //   verbose: true, // 是否在控制台输出压缩结果
      //   disable: false, // 是否禁用
      //   algorithm: 'gzip', // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
      //   ext: '.gz', // 压缩后的文件名后缀
      //   threshold: 10240, // 只有大小大于该值的资源会被处理 10240B = 10KB
      //   deleteOriginFile: false // 压缩后是否删除原文件
      // })
      // // 自动 IDE 并将光标定位到 DOM 对应的源代码位置。see: https://github.com/zh-lx/code-inspector
      // // vue的更推荐使用vue-devtools
      // codeInspectorPlugin({
      //   bundler: "vite"
      // })
      // 图片压缩
      // viteImagemin({
      //   verbose: true, // 是否在控制台输出压缩结果
      //   // 图片压缩配置
      //   // GIF 图片压缩配置
      //   gifsicle: {
      //     optimizationLevel: 4, // 优化级别 1-7，7为最高级别压缩
      //     interlaced: false // 是否隔行扫描
      //   },
      //   // PNG 图片压缩配置
      //   optipng: {
      //     optimizationLevel: 4 // 优化级别 0-7，7为最高级别压缩
      //   },
      //   // JPEG 图片压缩配置
      //   mozjpeg: {
      //     quality: 60 // 压缩质量 0-100，值越小压缩率越高
      //   },
      //   // PNG 图片压缩配置(另一个压缩器)
      //   pngquant: {
      //     quality: [0.8, 0.9], // 压缩质量范围 0-1
      //     speed: 4 // 压缩速度 1-11，值越大压缩速度越快，但质量可能会下降
      //   },
      //   // SVG 图片压缩配置
      //   svgo: {
      //     plugins: [
      //       {
      //         name: 'removeViewBox' // 移除 viewBox 属性
      //       },
      //       {
      //         name: 'removeEmptyAttrs', // 移除空属性
      //         active: false // 是否启用此插件
      //       }
      //     ]
      //   }
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
          // 当设置为 true 时，允许在 .scss 文件中使用 JavaScript 表达式（如 2 + 2 或变量计算）
          // 例如：$width: 16px + 8px; 这类计算会被直接解析，height: 12px+200px;
          javascriptEnabled: true, // 启用 Sass 中的 JavaScript 表达式支持
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
    build: {
      target: 'es2015',
      outDir: env.VITE_OUT_DIR || 'dist',
      cssMinify: true, // 启用 css 压缩
      // minify: false, // 是否禁用最小化混淆，可查看产物排查问题或作优化等，默认是esbuild
      // minify: 'terser', // 使用 terser 压缩
      // terserOptions: {
      //   compress: {
      //     drop_console: true, // 生产环境去除 console
      //     drop_debugger: true, // 生产环境去除 debugger
      //     pure_funcs: ['console.log'], // 额外指定要移除的存函数
      //     process:2// 执行两轮压缩优化
      //   },
      //   mangle: {
      //     toplevel: true,// 开启顶级作用域变量名混淆
      //   },
      //   format: {
      //     comments: false, // 移除所有代码注释
      //   },
      // },
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
