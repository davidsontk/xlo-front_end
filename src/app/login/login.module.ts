import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
@NgModule({
    imports: [
        FormsModule,
        HttpClientModule
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [LoginService],
})
export class LoginModule { }
