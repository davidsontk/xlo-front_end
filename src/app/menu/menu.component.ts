import { Usuario } from 'src/app/shared/models/usuario';
import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalLoginComponent } from '../login/modal-login/modal-login.component'

@Component({
    selector: 'menu-app',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
    usuarioLogado: Usuario;
    logado: boolean = false;

    constructor(private router: Router) { }

    ngOnInit() { 
        this.usuarioLogado = <Usuario>JSON.parse(sessionStorage.getItem('user'));
        if(this.usuarioLogado != undefined || this.usuarioLogado != null){
            this.logado = true;
        }
    }

    rotaListaUsuarios(): void {
        this.router.navigateByUrl('admin');
    }

    rotaCadastroUsuario(): void {
        this.router.navigateByUrl('/admin/cadastrar-usuario');
    }
    
    rotaAnuncio(){
        this.router.navigateByUrl('/anuncio');
    }

    fecharModalPai(evento){
        document.getElementById("clickModal").click();
            console.log( 'so confirmando', <Usuario>JSON.parse(sessionStorage.getItem('user')));
            this.usuarioLogado = <Usuario>JSON.parse(sessionStorage.getItem('user'));
            this.logado = true;
        
    }

    deslogar(){
        sessionStorage.clear();
        this.logado = false;
    }
}