export function useDesign(scope: string) {
  const namespace = 'v';
  // 'pg'页面、'cmp'组件、'pub'公共组件
  const prefixCls = `${namespace}-${scope}`;

  return {
    prefixCls,
    createClass: (content: string) => prefixCls + content,
  };
}
