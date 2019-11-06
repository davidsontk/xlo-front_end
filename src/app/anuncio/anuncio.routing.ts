import { EditarAnuncioComponent } from './editar-anuncio/editar-anuncio.component';
import { CadastroAnuncioComponent } from './cadastro-anuncio/cadastro-anuncio.component';
import { Routes } from '@angular/router';

import { ListaAnunciosComponent } from './lista-anuncios.component';

export const anuncioRoutes: Routes = [
    {
        path: '', redirectTo: 'lista-anuncios', pathMatch: 'full'
    },
    {
        path: 'lista-anuncios',
        component: ListaAnunciosComponent
    },
    {
        path: 'cadastro-anuncio',
        component: CadastroAnuncioComponent
    },
    {
        path:'editar-anuncio',
        component: EditarAnuncioComponent
    }
]
