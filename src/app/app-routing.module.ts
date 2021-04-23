import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from "./views/page-not-found/page-not-found.component";
import {HomeComponent} from "./views/home/home.component";
import {LoginComponent} from "./views/login/login.component";
import {FacebookpageComponent} from "./views/facebookpage/facebookpage.component";
import {RegisterComponent} from "./views/register/register.component";
import {ProductDetailComponent} from "./views/product-detail/product-detail.component";
import {OrderProductsComponent} from "./views/order-products/order-products.component";
import {AuthService} from "./guard/auth.service";
import {ShopComponent} from "./views/shop/shop.component";

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
        path: 'product-details/:id/place-order',
        component: OrderProductsComponent,
        canActivate:[AuthService]
      } ,
      {
        path:"shop",
        component:ShopComponent
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
