// http://www.projectcodify.com/angular-set-base-url-dynamically
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiUrl = document
      .getElementsByTagName('base')[0]
      .getAttribute('api-href');
    const fullUrl = `${apiUrl}${req.url}`;
    const apiReq = req.clone({ url: fullUrl });
    return next.handle(apiReq);
  }
}

export const ApiUrlInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiUrlInterceptor,
  multi: true
};
