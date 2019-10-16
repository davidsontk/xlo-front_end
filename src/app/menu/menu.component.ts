import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'menu-app',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
    nomeUser: string = 'nomeUser';
    logado: boolean = true;

    constructor(private router: Router) { }

    ngOnInit() { }

    rotaListaUsuarios(): void {
        this.router.navigateByUrl('admin');
    }

    rotaCadastroUsuario(): void {
        this.router.navigateByUrl('/admin/cadastrar-usuario');
    }
}