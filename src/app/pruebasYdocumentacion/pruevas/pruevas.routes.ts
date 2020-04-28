import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { PruevasComponent } from'./pruevas.component'



const routes : Routes = [
    {
        path:'',
        component:PruevasComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],

    exports:[RouterModule]
})

export class PruevasRouterModule {}