import { NgModule } from "@angular/core";
import { WebComponent } from './web.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: WebComponent
    }
]

@NgModule({
    declarations: [
        WebComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule
    ]
})
export class WebModule {}