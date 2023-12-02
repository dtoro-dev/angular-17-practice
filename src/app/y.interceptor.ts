import { HttpInterceptorFn } from '@angular/common/http';

export const yInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
