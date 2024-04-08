# 为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
# js中通过`import.meta.env.VITE_APP_BASE_API`取值

# 环境
VITE_NODE_ENV=production

# 端口号
VITE_APP_PORT = 5173

# 接口前缀
VITE_APP_BASE_API = '/pro-api'

# 后端服务地址
VITE_APP_SERVICE_API = 'http://localhost:888'

# 是否删除debugger
VITE_DROP_DEBUGGER = true

# 是否删除console.log
VITE_DROP_CONSOLE = true

# 是否sourcemap
VITE_SOURCEMAP = false

# 打包路径
VITE_BASE_PATH = ./

# 输出路径
VITE_OUT_DIR = dist-pro

# 标题
VITE_APP_TITLE = Vue3-Ts-Template
