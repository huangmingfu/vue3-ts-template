/** @type {import("prettier").Config} */
export default {
  printWidth: 100, // 一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个tab代表几个空格数，默认为2
  useTabs: false, // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  vueIndentScriptAndStyle: false, // 是否对vue中的script及style标签缩进
  singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
  quoteProps: 'as-needed', // 对象的key仅在必要时用引号
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  trailingComma: 'none', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  jsxSingleQuote: false, // jsx中使用单引号
  arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  requirePragma: false, // 不需要严格按照文件顶部的一些特殊注释来格式化
  proseWrap: 'never', // 使用默认的折行标准
  htmlWhitespaceSensitivity: 'strict', // 对HTML全局空白敏感
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
  // import 顺序自动格式化插件：
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: [
    '^vue(.*)$', // vue 相关放在最前面
    '<THIRD_PARTY_MODULES>', // 其他第三方模块
    '^@/components/(.*)$', // 全局组件
    '^@/(hooks|store)(.*)$', // 自定义 hooks 和 store 统一分组
    '^@/(.*)$', // 其他 @/ 开头的模块
    '^[./]' // 当前文件夹和父文件夹的相对导入
  ]
};
