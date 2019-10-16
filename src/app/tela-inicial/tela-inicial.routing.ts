import { TelaInicialComponent } from './tela-inicial.component';
import { Routes } from '@angular/router';

export const telaInicialRoutes: Routes = [
    {
        path: '', redirectTo: 'tela-inicial', pathMatch: 'full'
    },
    {
        path: 'tela-inicial',
        component: TelaInicialComponent
    }
]
