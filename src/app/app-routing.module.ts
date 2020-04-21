import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PruevasComponent} from "./pruebasYdocumentacion/pruevas/pruevas.component";
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {path:'',loadChildren:()=> import( './pages/login/login.module' ).then( m => m.LoginModule ) },
  {path:"pruevas",component:PruevasComponent},
  {path:"urlPrueva",component:HeaderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
