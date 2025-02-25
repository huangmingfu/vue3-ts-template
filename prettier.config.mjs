/** @type {import("prettier").Config} */
export default {
  printWidth: 100, // 一行的字符数，如果超过会进行换行，默认为80
  singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
  proseWrap: 'never', // 长文本是否自动换行
  htmlWhitespaceSensitivity: 'strict', // HTML中的空白字符敏感度
  endOfLine: 'auto', // 文件末尾的换行符
  // import 顺序自动格式化插件：
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: [
    '^vue(.*)$', // vue 相关放在最前面
    '<THIRD_PARTY_MODULES>', // 其他第三方模块
    '^@/components/(.*)$', // 全局组件
    // '^@/(hooks|store)(.*)$', // 自定义 hooks 和 store 统一分组
    '^@/(.*)$', // 其他 @/ 开头的模块
    '^[./]', // 当前文件夹和父文件夹的相对导入
  ],
};
