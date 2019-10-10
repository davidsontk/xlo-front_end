import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';

export const appRoutes: Routes = [
    // {
    //     path: '', redirectTo: 'login', pathMatch: 'full'
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
    },
    {
        path: 'login',
        component: LoginComponent
    },

]
