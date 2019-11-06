import { TelaInicialService } from './tela-inicial.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

@Component({
    selector: 'tela-inicial-app',
    templateUrl: './tela-inicial.component.html',
    styleUrls: ['./tela-inicial.component.css']
})

export class TelaInicialComponent implements OnInit {
    tipoVeiculo = '';
    marcaVeiculo = '';
    campoDinamico = '';

    constructor(private telaInicialService: TelaInicialService,
        private toastrService: ToastrService) { }

    ngOnInit() {
        this.buscarTiposVeiculos();
    }

    listaTipoVeiculos = [];
    listaMarcaVeiculos = [];
    listaVeiculos = [];
    imgs = 0;

    buscarTiposVeiculos() {
        this.telaInicialService.buscarTiposVeiculo().subscribe(
            (data: any) => {
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
    quantidadePorPagina: number = 10;

    buscarVeiculos(marcaVeiculo, campoDinamico, pagina, tamanhoPagina) {
        this.telaInicialService.buscarVeiculos(marcaVeiculo, campoDinamico, pagina, tamanhoPagina).subscribe(
            (data: any) => {
                console.log('Veiculos recebidos = ', data);
                this.quantidadeTotalElementos = data.totalElements;
                this.listaVeiculos = data.content;
            },
            (error) => {
                console.log('Erro ao buscar veículos!', error);
            }
        );
    }

    buscarVeiculosPorFiltro() {
        console.log('Antes do role', this.marcaVeiculo);
        if (this.marcaVeiculo == '') {
            this.toastrService.error('Marca veiculo deve ser preenchido ', 'Erro na busca');
        } else {
            console.log('ENVIANDO ENDPOINT ', this.marcaVeiculo);
            console.log('ENVIANDO campoDinamico ', this.campoDinamico);

            this.buscarVeiculos(this.marcaVeiculo, this.campoDinamico, 0, 10);
        }
        //this.toastrService.success('mensagem ', 'titulo toastr');
    }

    getTipoVeiculo(tipoVeiculo) {
        if (tipoVeiculo.target.value != '') {
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
        if (pageChange >= 1) {
            this.buscarVeiculos(this.marcaVeiculo, this.campoDinamico, (this.paginaAtual - 1), this.quantidadePorPagina);
        } else {
            this.buscarVeiculos(this.marcaVeiculo, this.campoDinamico, (this.paginaAtual), this.quantidadePorPagina);
        }
    }
}