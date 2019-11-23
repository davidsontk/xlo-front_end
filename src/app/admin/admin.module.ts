import { EditarAnuncioComponent } from './../anuncio/editar-anuncio/editar-anuncio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { adminRoutes } from './admin.routing';
import { AdminService } from './admin.service';

import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(adminRoutes)
    ],
    exports: [],
    declarations: [CadastroUsuarioComponent, ListarUsuariosComponent, EditarUsuarioComponent],
    providers: [AdminService],
})
export class AdminModule { }
