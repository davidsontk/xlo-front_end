import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { TelaInicialComponent } from './tela-inicial.component';
import { telaInicialRoutes } from './tela-inicial.routing';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        RouterModule.forChild(telaInicialRoutes)
    ],
    exports: [],
    declarations: [TelaInicialComponent],
    providers: [],
})
export class TelaInicialModule { }
