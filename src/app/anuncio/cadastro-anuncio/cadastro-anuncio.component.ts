import { Veiculo } from 'src/app/shared/models/veiculo';
import { CadastroAnuncioService } from './cadastro-anuncio.service';
import { TelaInicialService } from '../../tela-inicial/tela-inicial.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'cadastro-anuncio-app',
    templateUrl: 'cadastro-anuncio.component.html',
    styleUrls: ['./cadastro-anuncio.component.css'],
    providers: [CadastroAnuncioService]

})

export class CadastroAnuncioComponent implements OnInit {
    veiculo = new Veiculo();
    marcaVeiculo = '';
    tipoVeiculo = '';
    campoDinamico = '';
    opcionais = '';
    comFiltro: boolean = false;

    listaMarcaVeiculos = [];
    listaTipoVeiculos = [];

    constructor(private telaInicialService: TelaInicialService,private cadastroAnuncioService:CadastroAnuncioService,private router: Router ,toastrService: ToastrService) {

    }

    buscarMarcaVeiculos(tipoVeiculo) {
        this.telaInicialService.buscarMarcaVeiculos(tipoVeiculo).subscribe(
            (data: any) => {
                this.listaMarcaVeiculos = data;
            },
            (error) => {
                console.log('erro ao buscar marca de veiculos', error);
            }
        );
    }
    limparFiltro() {
        this.campoDinamico = '';
        this.listaMarcaVeiculos = [];
        //this.toastrService.info('Filtro Limpo', 'Informação');
    }
    buscarTiposVeiculos() {
        this.telaInicialService.buscarTiposVeiculo().subscribe(
            (data: any) => {
                this.listaTipoVeiculos = data;
            },
            (error) => {
                console.log('erro ao buscar tipo veiculo', error);
            }
        )
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
    buscarOpcionais() {
        this.cadastroAnuncioService.buscarOpcionais().subscribe(
            (data: any) => {
                this.opcionais = data;
                console.log(data);
            },
            (error) => {
                console.log('erro ao buscar lista opcionais', error);
            }
        )
    }
    cadastrarVeiculo(): void {
        
        console.log(this.veiculo);
        console.log('cadastra Veiculo');
        /*
        this.veiculo.descricao = document.querySelector('#descricao').nodeValue;
        this.veiculo.preco = document.querySelector('#preco').nodeValue;
        this.veiculo.km = document.querySelector('#km').nodeValue;
        this.veiculo.imagem = document.querySelector('#imagem').nodeValue;
        this.veiculo.marca = document.querySelector('#marca').nodeValue;
        this.veiculo.adicionais = document.querySelector('#adicionais').nodeValue;

        this.cadastroAnuncioService.cadastrarVeiculo(this.veiculo).subscribe(
            (data) => {
                this.toastrService.success(data, 'Sucesso');
            },
            (error) => {
                console.log('Erro ao tentar logar usuario', error);
            }
        );*/
    
    }
    ngOnInit() {
        this.buscarTiposVeiculos()
        this.buscarOpcionais()
    }
}