import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

const routes: Routes = [
    {
        path: '',
        component: ListComponent
    }
]

@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MaterialModule
    ]
})
export class ListModule {}