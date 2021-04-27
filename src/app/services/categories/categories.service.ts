import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../Interface/product";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http : HttpClient) { }
  readonly url = "http://localhost:8000/api/user/";

  getcategory() {
    return this.http.get(`${this.url}` + 'category')
  }
    getproductbycat(id) : any{
      return this.http.get<Product[]>(`${this.url}` + `getproductbycat/${id}`)
    }
  }

