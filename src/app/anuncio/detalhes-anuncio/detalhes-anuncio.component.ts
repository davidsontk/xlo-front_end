import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veiculo } from 'src/app/shared/models/veiculo';
import { TelaInicialService } from '../../tela-inicial/tela-inicial.service';

@Component({
    selector: 'detalhes-anuncio-app',
    templateUrl: 'detalhes-anuncio.component.html',
    styleUrls: ['detalhes-anuncio.component.css']
})

export class DetalhesAnuncioComponent implements OnInit {
    idVeiculo: number;
    listaVeiculos : [];
    veiculo = new Veiculo();
    quantidadeTotalElementos = 0;

    constructor(private route:ActivatedRoute,private telaInicialService: TelaInicialService) {
        this.idVeiculo = this.route.snapshot.params['id'];
     }

    buscarTodosVeiculos(pagina, tamanhoPagina) {
        this.telaInicialService.buscarTodosVeiculos(pagina, tamanhoPagina).subscribe(
            (data: any) => {
                this.quantidadeTotalElementos = data.totalElements;
                
                data.content.forEach(element => {
                    if(element.id == this.idVeiculo){
                        this.veiculo = element;
                        return;
                    }
                });
                console.log(this.veiculo)
            },
            (error: any) => {
                console.log('Erro ao buscarTodosVeiculos', error)
            }
        );
    }
    ngOnInit() { 
        
        this.buscarTodosVeiculos(0,10000);
        console.log(this.listaVeiculos)
    }
}