import {NgModule} from '@angular/core';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LoginRouterModule {}
