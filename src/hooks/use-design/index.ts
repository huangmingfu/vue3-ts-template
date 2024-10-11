import variables from '@/styles/scss/variables.module.scss'

export function useDesign(scope: string) {
  const scssVariables = variables
  // 'pg'页面、'cmp'组件、'pub'公共组件
  const prefixCls = `${scssVariables.namespace}-${scope}`

  return {
    prefixCls,
    createClass: (content: string) => prefixCls + content
  }
}
