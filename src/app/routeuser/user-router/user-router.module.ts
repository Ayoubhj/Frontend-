import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../../views/login/login.component";
import {FacebookpageComponent} from "../../views/facebookpage/facebookpage.component";
import {RegisterComponent} from "../../views/register/register.component";
import {ProductDetailComponent} from "../../views/product-detail/product-detail.component";
import {OrderProductsComponent} from "../../views/order-products/order-products.component";
import {AuthService} from "../../guard/auth.service";
import {ShopComponent} from "../../views/shop/shop.component";
import {HomeComponent} from "../../views/home/home.component";
import {HomepageComponent} from "../../views/homepage/homepage.component";

const routes: Routes = [
  {
    path :'',
    component:HomeComponent,
    children : [
      {
        path:"",
        component:HomepageComponent,
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
        path:"product-details",
        component:ProductDetailComponent

      },
      {
        path: 'product-details/place-order',
        component: OrderProductsComponent,
        canActivate:[AuthService]
      } ,
      {
        path:"shop",
        component:ShopComponent
      }
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class UserRouterModule { }
