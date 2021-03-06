import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veiculo } from 'src/app/shared/models/veiculo';
import { TelaInicialService } from '../../tela-inicial/tela-inicial.service';
import { AnuncioService } from '../anuncio.service';
import * as $ from 'jquery';

@Component({
    selector: 'detalhes-anuncio-app',
    templateUrl: 'detalhes-anuncio.component.html',
    styleUrls: ['detalhes-anuncio.component.css']
})

export class DetalhesAnuncioComponent implements OnInit {
    idVeiculo:0;
    opcionais: [];
    listaVeiculos : [];
    imagens: [];
    quantidadeImagens = 0;
    veiculo = new Veiculo();
    quantidadeTotalElementos = 0;
    primeiraImagem = '';
    
    constructor(private route:ActivatedRoute,private telaInicialService: TelaInicialService,private anuncioService: AnuncioService) {
        this.idVeiculo = sessionStorage.carSelected;
    }

    buscarVeiculoEspecifico(){
        this.anuncioService.buscarVeiculoEspecifico(this.idVeiculo).subscribe(
            (data: any) => {               
                this.veiculo = data.veiculo;
                console.log(this.veiculo);
                this.opcionais = data.opcionais;
            },
            (error: any) => {
                console.log('Erro ao buscar Veiculo', error);
            }
        )
    }

    verTelefone(evt){
        $('.text-card-telefone').removeClass('d-none')
    }

    buscarImagem(){
        this.anuncioService.buscarImagem(this.idVeiculo).subscribe(
            (data: any) => {
                this.imagens = data;
                this.quantidadeImagens = data.length;
                console.log(this.idVeiculo);
                console.log(data);
            },
            (error: any) => {
                console.log('Erro ao buscar Imagem', error);
            }
        )
    }
    ngOnInit() {
        this.buscarVeiculoEspecifico();
        this.buscarImagem();
        setTimeout(function(){
            $('.carousel-item:first(1)').addClass('active');
        },500)
    }
}
