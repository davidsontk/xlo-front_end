import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { loginRoutes } from './login.routing';
import { SharedModule } from '../shared/shared.module';
import { ModalLoginComponent } from './modal-login/modal-login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(loginRoutes)
    ],
    exports: [ModalLoginComponent],
    declarations: [LoginComponent, ModalLoginComponent],
    providers: [LoginService],
})
export class LoginModule { }
