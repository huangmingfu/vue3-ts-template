declare interface IResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

declare const BUILD_TIME: string;
