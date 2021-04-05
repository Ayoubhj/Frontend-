import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../Interface/user";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  readonly url = "http://localhost:8000/api/user";
  getauth(){
    const head ={ headers : new HttpHeaders({
        Accept : 'application/json',
        Authorization : `Bearer ${localStorage.getItem('token')}`
      })
    }
    return head;
  }



}
