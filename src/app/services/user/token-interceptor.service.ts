import {Injectable, Injector} from '@angular/core';
import {HttpInterceptor, HttpRequest,HttpHandler} from "@angular/common/http";
import {UserServicesService} from "./user-services.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements  HttpInterceptor{

  constructor(private injector : Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const userSer = this.injector.get(UserServicesService);
    const tokenres = req.clone({
       setHeaders : {
         Accept : 'application/json',
         Authorization : `Bearer ${userSer.getToken()}`
       }
    })
    return next.handle(tokenres);
  }
}
