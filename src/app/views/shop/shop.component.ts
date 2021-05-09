import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interface/product';
import {CategoriesService} from "../../services/categories/categories.service";
import {ProductsService} from "../../services/product/products.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categories :any ;
  products : Product[] = [];
  searchText  =""
  resultproduct :any;
  path : any = "http://localhost:8000/images/"
  constructor(private catser :CategoriesService,private prodLoad : ProductsService) { }

  ngOnInit(): void {
    this.catser.getcategory().subscribe(res => {
         this.categories = res;

    });

    this.getallproducts();
  }

  ViewProductDetails(product :any){
    this.prodLoad.ViewProductDetails(product);
  }

  getproductbycat(id): any {
      this.catser.getproductbycat(id).subscribe( res => {
            this.products = [...res.data]
      });
  }
  getallproducts(){
    this.prodLoad.getallproducts().subscribe( res => {
      this.resultproduct =  this.products = [...res]
    });
  }
  
  livesearch(){
    console.log(this.searchText)
    this.resultproduct = this.products.filter((product) => product.title.toLowerCase().includes(this.searchText.toLowerCase())  )
  }
}
