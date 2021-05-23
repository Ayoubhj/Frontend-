import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from "./views/page-not-found/page-not-found.component";
import {HomeComponent} from "./views/home/home.component";
import {LoginComponent} from "./views/login/login.component";
import {FacebookpageComponent} from "./views/facebookpage/facebookpage.component";
import {RegisterComponent} from "./views/register/register.component";
import {ProductDetailComponent} from "./views/product-detail/product-detail.component";

import {AuthService} from "./guard/auth.service";
import {ShopComponent} from "./views/shop/shop.component";
import { OrderProductComponent } from './views/order-product/order-product.component';
import { OrderDetailsComponent } from './views/order-details/order-details.component';


const routes: Routes = [
      {
        path:"",
        component:HomeComponent,
      },
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"api/user/facebook/callback",
        component:FacebookpageComponent
      },
      {
        path:"register",
        component:RegisterComponent
      },
      {
        path:"product-details/:id",
        component:ProductDetailComponent

      },
      {
        path: 'placeorder',
        component: OrderProductComponent,
        canActivate:[AuthService]
      } ,
      {
        path:"shop",
        component:ShopComponent
      },
      {
        path:"order-details",
        component:OrderDetailsComponent
      },
    
      {
        path: "**",
        component: PageNotFoundComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
