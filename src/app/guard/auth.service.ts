import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {UserServicesService} from "../services/user/user-services.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router ,private log: UserServicesService) { }

  canActivate(): boolean{
    let token = localStorage.getItem('token');
    if(!token){
      this.route.navigate(['login'])
      return false;
    }
    return true;
  }
}
