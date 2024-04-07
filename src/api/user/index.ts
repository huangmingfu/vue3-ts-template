import service from '@/services/service';

// xxx
export function getHome(params: any): Promise<IResponse<{ home: any }>> {
  return service({
    method: 'GET',
    url: 'get/home',
    params,
  })
    .then((res) => res.data)
    .catch((e) => e);
}
