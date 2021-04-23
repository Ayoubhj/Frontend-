import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../Interface/user";
import {Product} from "../../Interface/product";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient,private route :Router) { }
  readonly url = "http://localhost:8000/api/user/";





  getlastshoes(): any{
      return this.http.get(`${this.url}` + 'lastshoes')
  }
  getproduct(id) : any {
      return this.http.get(`${this.url}` + `getproduct/${id}`)
  }



  ViewProductDetails(product :any){
      this.route.navigate(['/product-details',product.id], {
          queryParams : {
             name :product.title
          }
      });
  }
}
