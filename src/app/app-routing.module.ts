import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginOkGuard } from './guards/login-ok.guard';


const routes: Routes = [
  {path:'login',loadChildren:()=> import( './pages/login/login.module' ).then( m => m.LoginModule ),canActivate:[LoginOkGuard] },
  {path:'dashboard',loadChildren:() => import ('./pages/dashboard/module/dashboard.module').then( m => m.DashboardModule )},
  {path:'pruevas',loadChildren:()=> import('./pruebasYdocumentacion/pruevas/pruevas.module').then(m => m.PruevasModule) },
  {path:'',loadChildren:()=> import('./pruebasYdocumentacion/pruevas/pruevas.module').then(m => m.PruevasModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
