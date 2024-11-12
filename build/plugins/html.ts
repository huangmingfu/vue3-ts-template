import type { Plugin } from 'vite';

export function setupHtmlPlugin(buildTime: string) {
  const plugin: Plugin = {
    name: 'html-plugin', // 插件名称，用于标识插件
    apply: 'build', // 指定插件的应用阶段为构建时
    // html 转换 @see https://vitejs.cn/vite5-cn/guide/api-plugin.html#transformindexhtml
    transformIndexHtml(html) {
      return html.replace('<head>', `<head>\n    <meta name="buildTime" content="${buildTime}">`);
    }
  };

  return plugin;
}
