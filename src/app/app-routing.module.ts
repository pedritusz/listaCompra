import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginOkGuard } from './guards/login-ok.guard';


const routes: Routes = [
  {path: 'login' , loadChildren : () => import( './pages/login/login.module' ).then( m => m.LoginModule ), canActivate : [LoginOkGuard] },
 // {path: 'pruevas', loadChildren : () => import( './documentation/pruevas/pruevas.module' ).then( m => m.PruevasModule ) },
 {path : 'createList', loadChildren: () => import('../app/pages/create-list/create-list.module').then(m => m.CreateListModule) },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
