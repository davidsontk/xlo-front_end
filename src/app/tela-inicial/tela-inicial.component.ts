import { TelaInicialService } from './tela-inicial.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
    selector: 'tela-inicial-app',
    templateUrl: './tela-inicial.component.html',
    styleUrls: ['./tela-inicial.component.css']
})

export class TelaInicialComponent implements OnInit {
    tipoVeiculo = '';
    marcaVeiculo = '';
    campoDinamico = '';
    comFiltro: boolean = false;

    constructor(private telaInicialService: TelaInicialService,
        private toastrService: ToastrService, private router: Router) { }

    ngOnInit() {
        this.buscarTiposVeiculos();
        this.buscarTodosVeiculos(0,12);
    }

    listaTipoVeiculos = [];
    listaMarcaVeiculos = [];
    listaVeiculos = [];
    imgs = 0;

    buscarTiposVeiculos() {
        this.telaInicialService.buscarTiposVeiculo().subscribe(
            (data: any) => {
                console.log();
                this.listaTipoVeiculos = data;
                console.log('data buscarTiposVeiculos', data);
            },
            (error) => {
                console.log('erro ao buscar tipo veiculo', error);
            }
        )
    }

    buscarMarcaVeiculos(tipoVeiculo) {
        this.telaInicialService.buscarMarcaVeiculos(tipoVeiculo).subscribe(
            (data: any) => {
                this.listaMarcaVeiculos = data;
                console.log('data buscarMarcaVeiculos', data);
            },
            (error) => {
                console.log('erro ao buscar marca de veiculos', error);
            }
        );
    }

    quantidadeTotalElementos: number = 0;
    paginaAtual: number = 0;
    quantidadePorPagina: number = 12;

    buscarVeiculos(tipoVeiculo, marcaVeiculo, campoDinamico, pagina, tamanhoPagina) {
        this.telaInicialService.buscarVeiculos(tipoVeiculo, marcaVeiculo, campoDinamico, pagina, tamanhoPagina).subscribe(
            (data: any) => {
                console.log('Veiculos recebidos = ', data);
                this.quantidadeTotalElementos = data.totalElements;
                this.listaVeiculos = data.content.map(function(a){
                    let adicional = a.descricao.length > 20 ? "..." : "";
                    a.descricao = a.descricao.slice(0,20) + adicional;
                    return a;
                });


            },
            (error) => {
                console.log('Erro ao buscar veículos!', error);
            }
        );
    }

    buscarVeiculosPorFiltro() {
        this.comFiltro = true;
        console.log('Antes do role', this.marcaVeiculo);
        if (this.marcaVeiculo == '') {
            this.toastrService.error('Marca veiculo deve ser preenchido ', 'Erro na busca');
        } else {
            console.log('ENVIANDO ENDPOINT ', this.marcaVeiculo);
            console.log('ENVIANDO campoDinamico ', this.campoDinamico);

            this.buscarVeiculos(this.tipoVeiculo, this.marcaVeiculo, this.campoDinamico, 0, 12);
        }
        //this.toastrService.success('mensagem ', 'titulo toastr');

    }

    getTipoVeiculo(tipoVeiculo) {
        if (tipoVeiculo.target.value != '') {
            this.tipoVeiculo = tipoVeiculo.target.value;
            this.buscarMarcaVeiculos(tipoVeiculo.target.value);
        } else {
            this.listaMarcaVeiculos = [];
        }
        console.log('Tipo veiculo selecionado ', tipoVeiculo.target.value);
    }

    getMarcaVeiculo(marcaVeiculo) {
        if (marcaVeiculo.target.value != '') {
            this.marcaVeiculo = marcaVeiculo.target.value;
            console.log(this.marcaVeiculo);
        } else {
            this.marcaVeiculo = '';
        }
    }

    limparFiltro() {
        this.campoDinamico = '';
        this.listaMarcaVeiculos = [];
        this.toastrService.info('Filtro Limpo', 'Informação');
    }

    mudarPagina(pageChange) {
        this.paginaAtual = pageChange;
        if (this.comFiltro) {
            if (pageChange >= 1) {
                this.buscarVeiculos(this.tipoVeiculo, this.marcaVeiculo, this.campoDinamico, (this.paginaAtual - 1), this.quantidadePorPagina);
            } else {
                this.buscarVeiculos(this.tipoVeiculo, this.marcaVeiculo, this.campoDinamico, (this.paginaAtual), this.quantidadePorPagina);
            }
        } else {
            if (pageChange >= 1) {
                this.buscarTodosVeiculos((this.paginaAtual - 1), this.quantidadePorPagina);
            } else {
                this.buscarTodosVeiculos(this.paginaAtual, this.quantidadePorPagina);
            }
        }
    }

    buscarTodosVeiculos(pagina, tamanhoPagina) {
        this.telaInicialService.buscarTodosVeiculos(pagina, tamanhoPagina).subscribe(
            (data: any) => {
                console.log('TODOS VEICULOSS RECEBIDOS', data);
                this.quantidadeTotalElementos = data.totalElements;
                
                this.listaVeiculos = data.content.map(function(a){
                    let adicional = a.descricao.length > 20 ? "..." : "";
                    a.descricao = a.descricao.slice(0,20) + adicional;
                    return a;
                });
            },
            (error: any) => {
                console.log('Erro ao buscarTodosVeiculos', error)
            }
        );
    }

    rotaDetalhesDoAnuncio() {
        this.router.navigateByUrl('/anuncio/detalhes-anuncio');
    }
}