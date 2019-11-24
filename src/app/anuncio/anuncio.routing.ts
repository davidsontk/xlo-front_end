import { Routes } from '@angular/router';

import { ListaAnunciosComponent } from './lista-anuncios.component';
import { DetalhesAnuncioComponent } from './detalhes-anuncio/detalhes-anuncio.component';
import { EditarAnuncioComponent } from './editar-anuncio/editar-anuncio.component';
import { CadastroAnuncioComponent } from './cadastro-anuncio/cadastro-anuncio.component';

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
    },
    {
        path: 'detalhes-anuncio/:id',
        component: DetalhesAnuncioComponent
    }
]
