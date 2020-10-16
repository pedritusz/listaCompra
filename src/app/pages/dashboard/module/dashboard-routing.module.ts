import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../component/dashboard/dashboard.component';
import { LoginOkGuard } from 'src/app/guards/login-ok.guard';


const routes: Routes = [
  {path : '', component: DashboardComponent, canActivate : [LoginOkGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
