import { Component, OnInit,TemplateRef} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductsService} from "../../services/product/products.service";
import {Product} from "../../Interface/product";
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserServicesService } from 'src/app/services/user/user-services.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  products: Product  ;
 

  path : any = "http://localhost:8000/images/"
  constructor(public userserv : UserServicesService, private routeactive : ActivatedRoute,public prodserv : ProductsService ,private route :Router){
    
    
  }
  ngOnInit(): void {
    this.routeactive.paramMap.subscribe((params : ParamMap) => {
      if (params.get('id')){
        this.prodserv.getproduct(+params.get('id')).subscribe(res => {
          this.products  = res;
          console.log(res)
        });
      }
    });
     
  
  }

 
   placeorder(product){
      this.route.navigate(['/placeorder',product],{
          queryParams : {user_id : this.userserv.correntuser.id}
      });
   }
 

 
}


