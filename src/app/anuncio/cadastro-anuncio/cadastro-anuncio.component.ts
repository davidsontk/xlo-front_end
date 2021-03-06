import { AnuncioService } from './../anuncio.service';
import { Veiculo } from 'src/app/shared/models/veiculo';
import { Usuario } from 'src/app/shared/models/usuario';
import { TelaInicialService } from '../../tela-inicial/tela-inicial.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as $ from 'jquery';


@Component({
    selector: 'cadastro-anuncio-app',
    templateUrl: 'cadastro-anuncio.component.html',
    styleUrls: ['./cadastro-anuncio.component.css']
})

export class CadastroAnuncioComponent implements OnInit {
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
    }

    ngOnInit() {
        this.formVeiculo = this.fb.group({
            tipo: ['', Validators.required],
            ano: ['', Validators.required],
            marca: ['', Validators.required],
            descricao: ['', Validators.email],
            preco: ['', Validators.required],
            km: ['', Validators.required],
            imagens: ['', Validators.required],
            opcionais: ['', Validators.required]
        });
        this.usuarioLogado = <Usuario>JSON.parse(sessionStorage.getItem('user'));
        this.buscarTiposVeiculos();
        this.buscarOpcionais();
        this.quantidadeImagens = 0;
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
    }

    getMarcaVeiculo(marcaVeiculo) {
        if (marcaVeiculo.target.value != '') {
            this.marcaVeiculo = marcaVeiculo.target.value;
        } else {
            this.marcaVeiculo = '';
        }
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

    selecionaOpcional() {

        let campos = [];
        campos = $('.opcional-input:checked').map(function (a, b) {
            return ($(b).val());
        });
        this.opcionaisSelecao = Array.from(campos);
    }

    cadastrarVeiculo(): void {
        this.veiculo.descricao = this.formVeiculo.get('descricao').value;
        this.veiculo.preco = this.formVeiculo.get('preco').value;
        this.veiculo.ano = this.formVeiculo.get('ano').value;
        this.veiculo.kmRodado = this.formVeiculo.get('km').value;
        this.veiculo.marca = this.formVeiculo.get('marca').value;
        this.veiculo.tipo = this.formVeiculo.get('tipo').value;

        let anuncio = {
            opcionais: this.opcionaisSelecao,
            veiculo: this.veiculo,
            idUsuario: this.usuarioLogado.id,
        };

        this.anuncioService.cadastroVeiculo(anuncio).subscribe(
            (data: any) => {
                for (let i = 0; i < this.listaImagens.length; i++) {
                    this.salvarImagem(this.listaImagens[i], data.id);
                }
            },
            (error) => {
                console.log('Erro ao tentar salvar anuncio(veiculo e opcionais)', error);
            }
        );
    }

    inputFileChange(event) {
        this.listaImagens = [];
        if (event.target.files && event.target.files[0]) {
            for (let imagem of event.target.files) {
                this.listaImagens.push(imagem);
            }
        }
    }

    salvarImagem(imagem, veiculoId: any) {
        this.anuncioService.salvarImagem(imagem, veiculoId).subscribe(
            (data: any) => {
                this.quantidadeImagens++;
                if (this.quantidadeImagens > (this.listaImagens.length - 1)) {
                    this.toastrService.success('Sucesso', 'Anúncio cadastrado com sucesso!');
                    this.router.navigateByUrl('menu/tela-inicial');
                }
            },
            (error: any) => {
                console.log('Erro ao tentar salvar imagem do veiculo', error);
            }
        );
    }
}