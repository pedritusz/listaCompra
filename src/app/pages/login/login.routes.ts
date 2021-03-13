import {NgModule} from '@angular/core';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {Routes, RouterModule} from '@angular/router';
import { LoginOkGuard } from 'src/app/guards/login-ok.guard';

const routes: Routes = [
    { path: '', component: LoginPageComponent},
    {path: 'dashboard', loadChildren : () => import ( '../dashboard/module/dashboard.module' ).then( m => m.DashboardModule ), canActivate : [LoginOkGuard]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LoginRouterModule {}
