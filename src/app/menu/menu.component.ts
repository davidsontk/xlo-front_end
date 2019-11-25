import { Usuario } from 'src/app/shared/models/usuario';
import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalLoginComponent } from '../login/modal-login/modal-login.component'
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'menu-app',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
    usuarioLogado: Usuario;
    logado: boolean = false;

    constructor(private router: Router, private toastrService: ToastrService) { }

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
    
    rotaListaAnuncio(){
        this.router.navigateByUrl('/anuncio');
    }

    cadastroAnuncio() {
        this.router.navigateByUrl('/anuncio/cadastro-anuncio');
    }

    fecharModalPai(evento){
        document.getElementById("clickModal").click();
            this.usuarioLogado = <Usuario>JSON.parse(sessionStorage.getItem('user'));
            this.logado = true;
        
    }

    deslogar(){
        sessionStorage.clear();
        this.logado = false;
        this.toastrService.error('Usuário deslogado!','Info');
        this.router.navigateByUrl('menu/tela-inicial');
    }
}