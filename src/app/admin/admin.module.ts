import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { adminRoutes } from './admin.routing';
import { AdminService } from './admin.service';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(adminRoutes)
    ],
    exports: [],
    declarations: [CadastroUsuarioComponent, ListarUsuariosComponent],
    providers: [AdminService],
})
export class AdminModule { }
