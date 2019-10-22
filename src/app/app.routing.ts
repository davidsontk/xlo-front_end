import { Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
    {
        path: '', redirectTo: 'tela', pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        loadChildren: './login/login.module#LoginModule'

    },
    {
        path: '',
        component: MenuComponent,
        children: [
            {
                path: 'tela',
                loadChildren: './tela-inicial/tela-inicial.module#TelaInicialModule' 
            },
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule'
            }
        ]
    },
    

]
