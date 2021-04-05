import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private route : Router ) {}
  canActivate(): boolean{
    let token = localStorage.getItem('token');
    if(!token){
      this.route.navigate(['admin'])
      return false;
    }
    return true;
  }
}
