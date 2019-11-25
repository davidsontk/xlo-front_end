import { Usuario } from 'src/app/shared/models/usuario';
import { AnuncioService } from './anuncio.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lista-anuncios-app',
    templateUrl: 'lista-anuncios.component.html'
})

export class ListaAnunciosComponent implements OnInit {
    listaVeiculos = [];
    usuarioLogado: Usuario;
    
    constructor(private router: Router, private anuncioService: AnuncioService) {
        this.usuarioLogado = <Usuario>JSON.parse(sessionStorage.getItem('user'));

    }

    ngOnInit() {
        this.buscarVeiculosPorUsuario();
    }



    buscarVeiculosPorUsuario() {
        this.anuncioService.buscarVeiculosPorUsuario(this.usuarioLogado.name).subscribe(
            (data: any) => {

                this.listaVeiculos = data;
            },
            (error: any) => {
                console.log('Erro ao buscar veiculos cadastrados por usuario', error);
            }
        )

    }

    cadastroAnuncio() {
        this.router.navigateByUrl('/anuncio/cadastro-anuncio');
    }

    editarAnuncio() {
        this.router.navigateByUrl('/anuncio/editar-anuncio');
    }
}