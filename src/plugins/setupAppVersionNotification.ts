// 版本检测提示的方式: 'visibility' 页面可见性变化 | 'interval' 定时检查
const CHECK_TYPE: 'visibility' | 'interval' = 'interval';

export function setupAppVersionNotification() {
  const canAutoUpdateApp = import.meta.env.VITE_APP_AUTO_UPDATE === 'true';
  if (!canAutoUpdateApp) return;

  let isShow = false;

  // 抽取公共的版本检查逻辑
  async function checkVersion() {
    const preConditions = [!isShow, import.meta.env.VITE_NODE_ENV === 'production'];

    if (!preConditions.every(Boolean)) return;

    const buildTime = await getHtmlBuildTime();
    if (buildTime === BUILD_TIME) return;

    isShow = true;
    // 或者使用ui库的组件，然后用h函数渲染
    if (confirm('检测到新版本,请刷新页面获取最新内容')) {
      location.reload();
    }
  }

  if (CHECK_TYPE === 'visibility') {
    // 监听页面可见性变化，如果一直停留在当前页面，则不会触发版本检测提示
    document.addEventListener('visibilitychange', async () => {
      if (document.visibilityState === 'visible') {
        await checkVersion();
      }
    });
  } else {
    // 定时检查，轮训
    const CHECK_INTERVAL = 5 * 60 * 1000; // 每5分钟检查一次，可自行修改
    setInterval(checkVersion, CHECK_INTERVAL);
  }
}

async function getHtmlBuildTime() {
  const res = await fetch(`/index.html?time=${Date.now()}`);

  const html = await res.text();

  const match = html.match(/<meta name="buildTime" content="(.*)">/);

  const buildTime = match?.[1] || '';

  return buildTime;
}