import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tela-inicial-app',
    templateUrl: './tela-inicial.component.html'
})

export class TelaInicialComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        this.listaImagens = [
            {
                nome: "Fusca",
                path: "../assets/Img/fuscao.jpg"
            },
            {
                nome: "Brasília",
                path: "../assets/Img/brasiliaAmarela.jpg"
            }
        ];
    }

    listaImagens;
}