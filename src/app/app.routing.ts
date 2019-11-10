import { Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';

export const appRoutes: Routes = [
    {
        path: '', redirectTo: 'menu', pathMatch: 'full'
    },
    {
        path: '',
        component: MenuComponent,
        children: [
            {
                path: 'menu',
                loadChildren: './tela-inicial/tela-inicial.module#TelaInicialModule' 
            },
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule'
            },
            {
                path:'anuncio',
                loadChildren:'./anuncio/anuncio.module#AnuncioModule'
            }
        ]
    },
    

]
