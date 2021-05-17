import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(request:HttpRequest<any>,next:HttpHandler){
   // alert("come here 1st")
    if(localStorage.token){
      request=request.clone({
        setHeaders:{
          authtoken:localStorage.token
        }
      })
    }
    return next.handle(request)
  }
}
