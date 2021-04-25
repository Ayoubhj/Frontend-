import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProductsService} from "../../services/product/products.service";
import {Product} from "../../Interface/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  products: Product  ;

  path : any = "http://localhost:8000/images/"
  constructor(private routeactive : ActivatedRoute,public prodserv : ProductsService ) {
    this.routeactive.paramMap.subscribe((params : ParamMap) => {
      if (params.get('id')){
        this.prodserv.getproduct(+params.get('id')).subscribe(res => {
          this.products  = res;
          console.log(res)
        });
      }
    });
  }

  ngOnInit(): void {


  }


}
