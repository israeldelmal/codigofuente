import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from './routes/routes';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { WebComponent } from './components/web/web.component';

const routes: Routes = [
    {
        path: AppRoutes.root,
        component: LayoutComponent,
        loadChildren: './components/home/home.module#HomeModule'
    },
    {
        path: AppRoutes.list.path,
        component: LayoutComponent,
        loadChildren: './components/list/list.module#ListModule',
        canActivate: [AuthGuard]
    },
    {
        path: AppRoutes.web.path,
        component: WebComponent,
        loadChildren: './components/web/web.module#WebModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
