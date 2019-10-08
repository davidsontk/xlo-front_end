import { Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';

export const appRoutes: Routes = [
    // {
    //     path: '', redirectTo: 'login', pathMatch: 'full'
    // },
    // {
    //     path: 'login',
    //     loadChildren: './login/login.module#LoginModule'
    // },
    {
        path: '',
        component: MenuComponent,
        // canActivate: [AuthGuard],
        // children: [
        //     {
        //         path: 'carros',
        //         loadChildren: 'caminho'
        //     },
        //     {
        //         path: 'administracao',
        //         loadChildren: 'caminho'
        //     }
        // ]
    }

]
