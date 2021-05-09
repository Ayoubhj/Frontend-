import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product/products.service';
import { UserServicesService } from 'src/app/services/user/user-services.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
   user : any ;
   orders : any = []
  constructor(private UserSer : UserServicesService,private ProdSer : ProductsService) { 
 
  }

  ngOnInit(): void {
   
    this.UserSer.getuser().subscribe(res => {
      this.user = res
      this.ProdSer.getorders(this.user.id).subscribe(res => {
        this.orders = res;
        console.log(this.orders)
     })
    })
  
  
  }
}
