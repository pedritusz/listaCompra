import {NgModule} from '@angular/core';
import { NewListComponent } from '../component/new-list.page.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: NewListComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NewListRouterModule {}
