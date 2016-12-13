import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NoContentComponent } from './shared/components/no-content';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '**', component: NoContentComponent, pathMatch: 'full' }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
