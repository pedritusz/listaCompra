import { Component, NgModule } from '@angular/core';

import {DashboardComponent} from '../component/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginOkGuard } from 'src/app/guards/login-ok.guard';
import { LoginPageComponent } from '../../login/components/login-page/login-page.component';


const routes: Routes = [
  {path : '', component: DashboardComponent, canActivate : [LoginOkGuard]},
  {path : 'createList', loadChildren: () => import('../../create-list/create-list.module').then(m => m.CreateListModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
