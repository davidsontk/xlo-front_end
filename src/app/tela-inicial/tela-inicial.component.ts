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

    constructor(private telaInicialService: TelaInicialService,
        private toastrService: ToastrService) { }

    ngOnInit() { 
        this.buscarTiposVeiculos();
    }

    listaTipoVeiculos = [];
    listaMarcaVeiculos = [];
    listaVeiculos = [];
    imgs = 0;

    buscarTiposVeiculos(){
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

    buscarMarcaVeiculos(tipoVeiculo){
        this.telaInicialService.buscarMarcaVeiculos(tipoVeiculo).subscribe(
            (data: any) => {
                this.listaMarcaVeiculos = data;
                console.log('data buscarMarcaVeiculos' , data);
            },
            (error) => {
                console.log('erro ao buscar marca de veiculos', error);
            }
        );
    }

    buscarVeiculos(marcaVeiculo, campoDinamico){
        this.telaInicialService.buscarVeiculos(marcaVeiculo, campoDinamico).subscribe(
            (data:any) =>{
                this.listaVeiculos = data;
            },
            (error)=>{
               console.log('Erro ao buscar veículos!', error);
            }
        );
    }

    buscarVeiculosPorFiltro(){
        console.log('Antes do role', this.marcaVeiculo);
        if(this.marcaVeiculo == ''){
            this.toastrService.error('Marca veiculo deve ser preenchido ', 'Erro na busca');
        }else{
            // TODO por enquanto vou enviar o campoDinamico vazio!!!
            console.log('ENVIANDO ENDPOINT ', this.marcaVeiculo);
            this.buscarVeiculos(this.marcaVeiculo, '');
        }
        //this.toastrService.success('mensagem ', 'titulo toastr');
    }

    getTipoVeiculo(tipoVeiculo){
        if(tipoVeiculo.target.value != ''){
            this.buscarMarcaVeiculos(tipoVeiculo.target.value);
        }else {
            this.listaMarcaVeiculos = [];
        }
        console.log('Tipo veiculo selecionado ', tipoVeiculo.target.value);
    }

    getMarcaVeiculo(marcaVeiculo){
        if(marcaVeiculo.target.value != ''){
            this.marcaVeiculo = marcaVeiculo.target.value;
            console.log(this.marcaVeiculo);
        }else {
            this.marcaVeiculo = '';
        }
    }
}