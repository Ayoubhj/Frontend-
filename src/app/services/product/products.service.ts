import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../Interface/user";
import {Product} from "../../Interface/product";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient,private route :Router,private routeactive :ActivatedRoute) { }
  readonly url = "http://localhost:8000/api/user/";


  correntptoduct : Product;


  productnow(id){
     this.getproduct(id).subscribe(res => {
      this.correntptoduct = res
       });
  }
  getlastshoes(): any{
      return this.http.get<Product[]>(`${this.url}` + 'lastshoes')
  }
  getproduct(id) : any {
      return this.http.get<Product[]>(`${this.url}` + `getproduct/${id}`)
  }
 


  ViewProductDetails(product :Product){
      this.route.navigate(['/product-details',product.id]);
  }

  getallproducts(): any{
    return this.http.get<Product[]>(`${this.url}` + 'getallproducts')
  }
  getlastclothes(): any{
    return this.http.get<Product[]>(`${this.url}` + 'getlastclothes')
  }

  placeOreder(order){
     return this.http.post(`${this.url}` + 'placeorder', order);
  }

  getorders(id) {
    return this.http.get(`${this.url}getorders/${id}`)
  }
}
