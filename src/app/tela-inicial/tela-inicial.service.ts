import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';

@Injectable()
export class TelaInicialService {

    constructor(private httpClient: HttpClient) { }


    buscarTiposVeiculo() {
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json;charset=UTF-8');

        return this.httpClient.get(environment.url_api + "campos/tipo-veiculo");
    }

    buscarMarcaVeiculos(){
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json;charset=UTF-8');

        return this.httpClient.get(environment.url_api + "campos/marca-veiculo/10");
    }
    buscarVeiculos(){
        let httpOptions = new HttpHeaders();
        httpOptions.append( 'Content-Type','applictaion/json;charset=UTF-8');
        return this.httpClient.get(environment.url_api + "campos/buscarVeiculos");


    }




}