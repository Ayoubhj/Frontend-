import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../../Interface/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  readonly url = "http://localhost:8000/api/user/";
  readonly urla = "http://localhost:8000/api/admin/";
  constructor(private http:HttpClient) { }


  login(user){
    return this.http.post<User>(`${this.url}`+'login',user);
  }
  loginadmin(admin){
    return this.http.post<User>(`${this.urla}`+'login',admin);
  }
  facebookLogin(): Observable<any>{
    return this.http.get(`${this.url}`+'facebook/redirect');
  }
  facebookLogincallback(code): Observable<any>{
    return this.http.get(`${this.url}`+'facebook/callback',{params: code });
  }
  facebookRegister(){
    return this.http.get(`${this.url}`+'facebook/redirect');
  }
  register(user){
    return this.http.post<User>(`${this.url}`+'register',user);
  }
}
