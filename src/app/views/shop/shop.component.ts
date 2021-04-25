import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../services/categories/categories.service";
import {ProductsService} from "../../services/product/products.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categories :any ;
  products :any;
  path : any = "http://localhost:8000/images/"
  constructor(private catser :CategoriesService,private prodLoad : ProductsService) { }

  ngOnInit(): void {
    this.catser.getcategory().subscribe(res => {
         this.categories = res;

    });
    this.prodLoad.getlastshoes().subscribe( res => {
      this.products = [...res.data]
      console.log(this.products)
    });
  }

}
