import service from '@/services/service';

import type { HomeParams, HomeResponse } from './types';

// xxx
export function getHome(params: HomeParams): Promise<IResponse<HomeResponse>> {
  return service({
    method: 'GET',
    url: 'get/home',
    params,
  })
    .then((res) => res.data)
    .catch((e) => e);
}
