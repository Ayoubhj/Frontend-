import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ShopComponent } from './views/shop/shop.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { OrderProductsComponent } from './views/order-products/order-products.component';
import { FacebookpageComponent } from './views/facebookpage/facebookpage.component';
import { DashbeordComponent } from './Admin-panel/Components/dashbeord/dashbeord.component';
import { AdminLoginComponent } from './Admin-panel/Components/admin-login/admin-login.component';
import { HomepageComponent } from './views/homepage/homepage.component';

import { HomeChartComponent } from './Admin-panel/views/home-chart/home-chart.component';
import { CategoryComponent } from './Admin-panel/views/category/category.component';





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
    OrderProductsComponent,
    FacebookpageComponent,
    DashbeordComponent,
    AdminLoginComponent,
    HomepageComponent,

    HomeChartComponent,

    CategoryComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
