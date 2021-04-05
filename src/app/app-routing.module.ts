import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from "./views/page-not-found/page-not-found.component";








const routes: Routes = [
  {
     path: '',
     loadChildren : () => import('./routeuser/user-router/user-router.module').then(a => a.UserRouterModule)
  },
  {
    path: 'admin',
    loadChildren : () => import('./Admin-panel/routeadmin/routeadmin.module').then(a => a.RouteadminModule)
  },
  {
    path:"**",
    component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
