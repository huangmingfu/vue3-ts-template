// import { h } from 'vue';

export function setupAppVersionNotification() {
  const canAutoUpdateApp = import.meta.env.VITE_APP_AUTO_UPDATE === 'true';

  if (!canAutoUpdateApp) return;

  let isShow = false;

  document.addEventListener('visibilitychange', async () => {
    const preConditions = [!isShow, document.visibilityState === 'visible']; // , import.meta.env.VITE_NODE_ENV === 'production'

    if (!preConditions.every(Boolean)) return;

    const buildTime = await getHtmlBuildTime();

    if (buildTime === BUILD_TIME) {
      return;
    }

    isShow = true;

    // const key = `open${Date.now()}`;

    // window.$notification?.open({
    //   message: $t('system.updateTitle'),
    //   description: $t('system.updateContent'),
    //   btn() {
    //     return h('div', { style: { display: 'flex', justifyContent: 'end', gap: '12px', width: '325px' } }, [
    //       h(
    //         Button,
    //         {
    //           onClick() {
    //             window.$notification?.destroy(key);
    //           }
    //         },
    //         () => $t('system.updateCancel')
    //       ),
    //       h(
    //         Button,
    //         {
    //           type: 'primary',
    //           onClick() {
    //             location.reload();
    //           }
    //         },
    //         () => $t('system.updateConfirm')
    //       )
    //     ]);
    //   },
    //   onClose() {
    //     isShow = false;
    //   }
    // });
  });
}

async function getHtmlBuildTime() {
  const res = await fetch(`/index.html?time=${Date.now()}`);

  const html = await res.text();

  const match = html.match(/<meta name="buildTime" content="(.*)">/);

  const buildTime = match?.[1] || '';

  return buildTime;
}
