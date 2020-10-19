import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(this.onError())
    );
  }

  onError() {
    return (res: HttpErrorResponse) => {
      return throwError({
        ...(res.error || {}),
        httpStatus: res.status
      });
    };
  }

}
