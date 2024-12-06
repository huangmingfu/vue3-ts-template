# Vue3 TypeScript Template

一套基于vue3.5+、ts、vite6的项目模板，封装了axios，vue-router，配置了vite.config.ts、scss、环境变量等。

## 特性

- ⚡️ [Vue 3.5+](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- 📦 [Vite 6](https://vitejs.dev/) - 新一代前端构建工具
- 🔧 使用 [PNPM](https://pnpm.io/zh/) 作为包管理器
- 🚀 开箱即用的 [Vue Router](https://router.vuejs.org/) 配置
- 📡 封装的 [Axios](https://axios-http.com/) HTTP 客户端
- 🎨 [SCSS](https://sass-lang.com/) 支持
- 📝 代码规范和格式化工具集成

### 代码规范工具

- [ESLint](https://eslint.org/) - JavaScript 代码检查工具
- [Prettier](https://prettier.io/) - 代码格式化工具
- [Stylelint](https://stylelint.io/) - CSS/SCSS 代码检查工具
- [commitlint](https://commitlint.js.org/) - Git commit 信息规范检查
- [husky](https://typicode.github.io/husky/) - Git hooks 工具
- [EditorConfig](https://editorconfig.org/) - 统一代码编辑器配置

## 前置条件

### 环境要求

- Node.js 18+
- PNPM 9.14+

### VSCode 插件要求

请安装以下 VSCode 插件以获得最佳开发体验：

- Vue - Official
- ESLint
- EditorConfig for VS Code
- Prettier - Code formatter
- Stylelint

## 快速开始

```bash
# 克隆项目
git clone https://github.com/huangmingfu/vue3-ts-template.git

# 进入项目目录
cd vue3-ts-template

# 安装依赖
pnpm i

# 启动开发服务器
pnpm dev
```

## 可用的脚本命令

```bash
# 开发环境
pnpm dev            # 开发环境启动
pnpm dev:test       # 测试环境启动
pnpm dev:pro        # 生产环境启动

# 构建
pnpm build:dev      # 开发环境构建
pnpm build:test     # 测试环境构建
pnpm build:pro      # 生产环境构建

# 预览构建结果
pnpm preview:dev    # 预览开发环境构建结果
pnpm preview:test   # 预览测试环境构建结果
pnpm preview:pro    # 预览生产环境构建结果

# 代码检查和格式化
pnpm lint:eslint    # ESLint 检查
pnpm lint:format    # Prettier 格式化
pnpm lint:style     # Stylelint 检查
pnpm lint:all       # 运行所有代码检查和格式化

# 依赖管理
pnpm deps:check     # 检查过时的依赖
pnpm deps:update    # 更新所有依赖到最新版本

# 其他
pnpm clean          # 清理构建文件和依赖
```

## 项目结构

```
├── build/              # 构建相关配置
├── public/             # 静态资源
├── src/               # 源代码
│   ├── assets/        # 资源文件
│   ├── components/    # 组件
│   ├── router/        # 路由配置
│   ├── store/         # 状态管理
│   ├── styles/        # 全局样式
│   ├── utils/         # 工具函数
│   ├── views/         # 页面
│   ├── App.vue        # 根组件
│   └── main.ts        # 入口文件
├── .env               # 环境变量
├── .env.dev          # 开发环境变量
├── .env.test         # 测试环境变量
├── .env.pro          # 生产环境变量
└── vite.config.ts    # Vite 配置
```

## License

[MIT](./LICENSE)
