import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lista-anuncios-app',
    templateUrl: 'lista-anuncios.component.html'
})

export class ListaAnunciosComponent implements OnInit {
    
    constructor(private router: Router) { }

    ngOnInit() { }

    cadastroAnuncio(){
        this.router.navigateByUrl('/anuncio/cadastro-anuncio');
    }

    editarAnuncio(){
        this.router.navigateByUrl('/anuncio/editar-anuncio');
    }
}