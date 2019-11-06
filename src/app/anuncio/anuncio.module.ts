import { anuncioRoutes } from './anuncio.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AnuncioService } from './anuncio.service';

import { ListaAnunciosComponent } from './lista-anuncios.component';
import { DetalhesAnuncioComponent } from './detalhes-anuncio/detalhes-anuncio.component';
import { EditarAnuncioComponent } from './editar-anuncio/editar-anuncio.component';
import { CadastroAnuncioComponent } from './cadastro-anuncio/cadastro-anuncio.component';
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(anuncioRoutes)
    ],
    exports: [],
    declarations: [ListaAnunciosComponent,
    CadastroAnuncioComponent,
    EditarAnuncioComponent,
    DetalhesAnuncioComponent],
    providers: [AnuncioService],
})
export class AnuncioModule { }
