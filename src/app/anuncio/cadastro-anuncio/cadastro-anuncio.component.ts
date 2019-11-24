import { Veiculo } from 'src/app/shared/models/veiculo';
import { Opcional } from 'src/app/shared/models/opcional';
import { CadastroAnuncioService } from './cadastro-anuncio.service';
import { TelaInicialService } from '../../tela-inicial/tela-inicial.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as $ from 'jquery';

@Component({
    selector: 'cadastro-anuncio-app',
    templateUrl: 'cadastro-anuncio.component.html',
    styleUrls: ['./cadastro-anuncio.component.css'],
    providers: [CadastroAnuncioService]

})

export class CadastroAnuncioComponent implements OnInit {
    veiculo = new Veiculo();
    formVeiculo: FormGroup;
    listaImagens = [];
    opcionaisSelecao = [];
    marcaVeiculo = '';
    tipoVeiculo = '';
    campoDinamico = '';
    opcionais = '';
    comFiltro: boolean = false;

    listaMarcaVeiculos = [];
    listaTipoVeiculos = [];

    constructor(
        private telaInicialService: TelaInicialService,
        private cadastroAnuncioService: CadastroAnuncioService,
        private router: Router,
        private toastrService: ToastrService,
        private fb: FormBuilder
    ) {
    }

    ngOnInit() {
        this.formVeiculo = this.fb.group({
            tipo: ['', Validators.required],
            marca: ['', Validators.required],
            descricao: ['', Validators.email],
            preco: ['', Validators.required],
            km: ['', Validators.required],
            imagens: ['', Validators.required],
            opcionais: ['', Validators.required]
        });

        this.buscarTiposVeiculos()
        this.buscarOpcionais()
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

    selecionaOpcional() {

        let campos = []

        campos = $('.opcional-input:checked').map(function (a, b) {
            return ($(b).val());
        });
        this.opcionaisSelecao = campos;
    }

    cadastrarVeiculo(): void {
        console.log(this.veiculo);
        this.veiculo.descricao = this.formVeiculo.get('descricao').value;
        this.veiculo.preco = this.formVeiculo.get('preco').value;
        this.veiculo.km = this.formVeiculo.get('km').value;
        this.veiculo.marca = this.formVeiculo.get('marca').value;

        //this.veiculo.adicionais = this.formVeiculo.get('adicionais').value;


        console.log(this.veiculo)
        this.cadastroAnuncioService.cadastroVeiculo(this.veiculo, this.opcionaisSelecao, this.listaImagens).subscribe(
            (data) => {
                this.toastrService.success(data, 'Sucesso');
            },
            (error) => {
                console.log('Erro ao tentar logar usuario', error);
            }
        );
    }

    inputFileChange(event) {
        this.listaImagens = [];
        if (event.target.files && event.target.files[0]) {
            for(let imagem of event.target.files){
                this.listaImagens.push(imagem);
                console.log(imagem);
            }
        }
    }
}