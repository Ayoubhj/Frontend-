import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdminLoginComponent} from "../Components/admin-login/admin-login.component";
import {DashbeordComponent} from "../Components/dashbeord/dashbeord.component";
import {AuthService} from "../../guard/auth.service";
import {AdminServiceService} from "../gaurd/admin-service.service";
import {HomeChartComponent} from "../views/home-chart/home-chart.component";
import {CategoryComponent} from "../views/category/category.component";

const routes: Routes = [
  {
    path:'',

    children:[
      {
        path:'login',
        component:AdminLoginComponent,
      },
      {
        path:'dashboard',
        component:DashbeordComponent,
        canActivate: [AdminServiceService],
        children:[
          {path : '' , component:HomeChartComponent},
          {path : 'category' , component:CategoryComponent},
        ]
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
export class RouteadminModule { }
