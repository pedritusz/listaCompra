import {NgModule} from '@angular/core';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    { path: '', component: LoginPageComponent},
    {path: 'dashboard', loadChildren : () => import ( '../dashboard/module/dashboard.module' ).then( m => m.DashboardModule )},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LoginRouterModule {}
