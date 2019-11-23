import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { Routes } from '@angular/router';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { CadastroAnuncioComponent } from '../anuncio/cadastro-anuncio/cadastro-anuncio.component';

export const adminRoutes: Routes = [
    {
        path: '', redirectTo: 'lista-usuarios', pathMatch: 'full'
    },
    {
        path: 'lista-usuarios',
        component: ListarUsuariosComponent,
        data: {
            title: 'Todos os Usuários'
         }
    },
    {
        path: 'cadastrar-usuario',
        component: CadastroUsuarioComponent,
        data: {
            title: 'Novo usuário'
        }
    }
];
