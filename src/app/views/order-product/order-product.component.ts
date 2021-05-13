import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { Product } from 'src/app/Interface/product';
import { ProductsService } from 'src/app/services/product/products.service';
import { UserServicesService } from 'src/app/services/user/user-services.service';
declare var paypal; 

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
  @ViewChild('paypal',{static: true}) paypalElement : ElementRef
   products : any;
   user_id;
   result : any;
   FormOrder :FormGroup;
   path : any = "http://localhost:8000/images/";
   error;
   success ;
  constructor(private Activeroute: ActivatedRoute,private fb : FormBuilder,public userserv : UserServicesService,private prodserv :ProductsService, private route : Router) {
   }

  ngOnInit(): void {
       this.Activeroute.params.subscribe((res : ParamMap) => {
          this.products = res
       });

       this.user_id = this.Activeroute.snapshot.queryParamMap.get('user_id')
       
       this.crateForm();

       paypal
       .Buttons({
        createOrder : (data,actions) => {
            return actions.order.create({
               purchase_units : [{
                   title : this.products.title,
                   amount : {
                      currency_code: "USD",
                      value : this.products.price
                   }
               }]
            })
        },
        onAprrove : (res) => {
           console.log(res)
        }
       })
       .render( this.paypalElement.nativeElement );
       
  }
  
  crateForm(){
    this.FormOrder = this.fb.group({
      user_id : [Number(this.user_id),Validators.required],
      firstname :["",Validators.required,Validators.toString],
      lastname :["",Validators.required],
      adresse :["",Validators.required],
      city :["",Validators.required],
      codepostal :["",Validators.required],
      telephone :["",Validators.required],
      product_id : [Number(this.products.id),Validators.required],
      size :["",Validators.required],
      quantity :["",Validators.required],
    });
     
  }
  
  
 async submit(){
   
        const data = this.FormOrder.value

        await  this.prodserv.placeOreder(data).subscribe(
        res => {
           this.result = res
           this.success = "information has saved"
        },  
        error =>{
           this.error = "fill the fields please"
       }
      );
      
 
  }

  hide(){
    let alert = document.getElementById("alert")
    alert.style.display = "none"
  }



}
