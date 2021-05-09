import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ShopComponent } from './views/shop/shop.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

import { FacebookpageComponent } from './views/facebookpage/facebookpage.component';
import {TokenInterceptorService} from "./services/user/token-interceptor.service";
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderProductComponent } from './views/order-product/order-product.component';
import { OrderDetailsComponent } from './views/order-details/order-details.component';









@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
 
    FacebookpageComponent,
      OrderProductComponent,
      OrderDetailsComponent,
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
