import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from './shared/shared.module';

import { appRoutes } from './app.routing';
import { LoginModule } from './login/login.module';
import { ToastrModule } from 'ngx-toastr';
import { TelaInicialService } from './tela-inicial/tela-inicial.service';
import { ModalLoginComponent } from './login/modal-login/modal-login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    HttpClientModule,
    LoginModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
  ],
  providers: [TelaInicialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
