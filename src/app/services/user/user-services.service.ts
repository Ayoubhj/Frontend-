import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../../Interface/user";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  readonly url = "http://localhost:8000/api/user/";
  constructor(private http:HttpClient,private route : Router) { }

  public correntuser : User;


  UserData(){
    if(this.isLoggedIn()){
      this.getuser().subscribe(res => {
          this.correntuser = res;
      });
    }
  }



  login(user){
      return this.http.post<User>(`${this.url}` + 'login', user);
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

  logout(){
      localStorage.removeItem('token')
      this.route.navigate(['']);
  }

  getuser(){
    return this.http.get<User>(`${this.url}`+'user');
  }

  getToken(){
    return localStorage.getItem('token');
  }
  isLoggedIn(): boolean {
     return !!localStorage.getItem('token');
  }
}
