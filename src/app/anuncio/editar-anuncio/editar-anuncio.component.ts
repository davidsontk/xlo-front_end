import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Veiculo } from 'src/app/shared/models/veiculo';
import { Usuario } from 'src/app/shared/models/usuario';
import { TelaInicialService } from 'src/app/tela-inicial/tela-inicial.service';
import { AnuncioService } from '../anuncio.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';

@Component({
    selector: 'editar-anuncio-app',
    templateUrl: 'editar-anuncio.component.html'
})

export class EditarAnuncioComponent implements OnInit {
    veiculo = new Veiculo();
    formVeiculo: FormGroup;
    usuarioLogado: Usuario;
    listaImagens = [];
    opcionaisSelecao = [];
    marcaVeiculo = '';
    tipoVeiculo = '';
    campoDinamico = '';
    opcionais = '';
    comFiltro: boolean = false;
    quantidadeImagens: number = 0;

    listaMarcaVeiculos = [];
    listaTipoVeiculos = [];

    constructor(
        private telaInicialService: TelaInicialService,
        private anuncioService: AnuncioService,
        private router: Router,
        private toastrService: ToastrService,
        private fb: FormBuilder
    ) {
        this.usuarioLogado = <Usuario>JSON.parse(sessionStorage.getItem('user'));
        this.veiculo = <Veiculo>JSON.parse(sessionStorage.getItem('veiculoEditar'));
    }

    ngOnInit() {
        this.formVeiculo = this.fb.group({
            tipo: ['', Validators.required],
            ano: ['', Validators.required],
            marca: ['', Validators.required],
            descricao: ['', Validators.email],
            preco: ['', Validators.required],
            km: ['', Validators.required]
        });
        // this.usuarioLogado = <Usuario>JSON.parse(sessionStorage.getItem('user'));
        // this.veiculo = <Veiculo>JSON.parse(sessionStorage.getItem('veiculoEditar'));
        console.log(this.veiculo);
        this.buscarTiposVeiculos()
        this.buscarOpcionais()
        this.quantidadeImagens = 0;
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

    buscarOpcionais() {
        this.anuncioService.buscarOpcionais().subscribe(
            (data: any) => {
                this.opcionais = data;
            },
            (error) => {
                console.log('erro ao buscar lista opcionais', error);
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
    }

    getMarcaVeiculo(marcaVeiculo) {
        if (marcaVeiculo.target.value != '') {
            this.marcaVeiculo = marcaVeiculo.target.value;
        } else {
            this.marcaVeiculo = '';
        }
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

    editarVeiculo() {
        this.veiculo.descricao = this.formVeiculo.get('descricao').value;
        this.veiculo.preco = this.formVeiculo.get('preco').value;
        this.veiculo.ano = this.formVeiculo.get('ano').value;
        this.veiculo.kmRodado = this.formVeiculo.get('km').value;
        this.veiculo.marca = this.formVeiculo.get('marca').value;
        this.veiculo.tipo = this.formVeiculo.get('tipo').value;

        let anuncio = {
            opcionais: null,
            veiculo: this.veiculo,
            idUsuario: this.usuarioLogado.id
        };

        console.log(anuncio);

        this.anuncioService.editarVeiculo(anuncio).subscribe(
            (data: any) => {
                this.router.navigateByUrl('menu/tela-inicial');
                this.toastrService.success('Veiculo Alterado', 'Sucesso');
            },
            (error) => {
                console.log('Erro ao tentar salvar anuncio(veiculo e opcionais)', error);
            }
        );
    }

}