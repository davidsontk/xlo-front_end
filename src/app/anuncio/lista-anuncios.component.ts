import { Veiculo } from 'src/app/shared/models/veiculo';
import { Usuario } from 'src/app/shared/models/usuario';
import { AnuncioService } from './anuncio.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'lista-anuncios-app',
    templateUrl: 'lista-anuncios.component.html'
})

export class ListaAnunciosComponent implements OnInit {
    listaVeiculos = [];
    usuarioLogado: Usuario;

    constructor(private router: Router,
        private anuncioService: AnuncioService,
        private toastrService: ToastrService) {
        this.usuarioLogado = <Usuario>JSON.parse(sessionStorage.getItem('user'));

    }

    ngOnInit() {
        this.buscarVeiculosPorUsuario();
    }

    buscarVeiculosPorUsuario() {
        this.anuncioService.buscarVeiculosPorUsuario(this.usuarioLogado.username).subscribe(
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

    editarAnuncio(veiculo) {
        sessionStorage.setItem('veiculoEditar', JSON.stringify(veiculo));
        this.router.navigateByUrl('/anuncio/editar-anuncio');
    }

    excluirVeiculo(veiculo: Veiculo) {
        this.anuncioService.excluirVeiculo(veiculo.id).subscribe(
            (data: any) => {
                this.listaVeiculos = [];
                this.buscarVeiculosPorUsuario();
                this.toastrService.success("Anúncio deletado com sucesso", "Sucesso");
            },
            (error) => {
                console.log('Erro ao deletar anuncio', error);
            }
        );
    }
}