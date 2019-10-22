import { TelaInicialService } from './tela-inicial.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tela-inicial-app',
    templateUrl: './tela-inicial.component.html',
    styleUrls: ['./tela-inicial.component.css']
})

export class TelaInicialComponent implements OnInit {

    constructor(private telaInicialService: TelaInicialService) { }

    ngOnInit() { 
        this.buscarTiposVeiculos();
        this.buscarMarcaVeiculos();
        this.buscarVeiculos();
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

    buscarMarcaVeiculos(){
        this.telaInicialService.buscarMarcaVeiculos().subscribe(
            (data: any) => {
                this.listaMarcaVeiculos = data;
                console.log('data buscarMarcaVeiculos' , data);
            },
            (error) => {
                console.log('erro ao buscar marca de veiculos', error);
            }
        );
    }
    buscarVeiculos(){
        this.telaInicialService.buscarVeiculos().subscribe(
            (data:any) =>{
                this.listaVeiculos = data;
            },
            (error)=>{
               console.log('Erro ao buscar veículos!', error);
            }
        );
    }
}