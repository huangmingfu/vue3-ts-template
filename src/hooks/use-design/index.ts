import variables from '@/styles/variables.module.scss'

/**
 * @param scope
 * @param type 'pg'页面、'cmp'组件、'pub'公共组件
 */
export function useDesign(scope: string, type: 'pg' | 'cmp' | 'pub' = 'pg') {
  const scssVariables = variables

  return {
    prefixCls: `${scssVariables.namespace}-${type}-${scope}`
  }
}
