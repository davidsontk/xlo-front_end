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

    buscarMarcaVeiculos(tipoVeiculo){
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json;charset=UTF-8');

        return this.httpClient.get(environment.url_api + "campos/marca-veiculo/" + tipoVeiculo);
    }
    
    buscarVeiculos(tipoVeiculo, marcaVeiculo, campoDinamico, pagina, tamanhoPagina){
        //verificando se o campo esta vazio, para n dar erro no endpoint
        if(campoDinamico == ''){
            campoDinamico = null;
        }
        let httpOptions = new HttpHeaders();
        httpOptions.append( 'Content-Type','applictaion/json;charset=UTF-8');

        return this.httpClient.get(environment.url_api + "campos/buscarVeiculos/" + tipoVeiculo +'/'+ marcaVeiculo + '/' + campoDinamico+ '/' + pagina + '/' + tamanhoPagina, {headers: httpOptions});
    }

    buscarTodosVeiculos(pagina, tamanhoPagina){
        let httpOptions = new HttpHeaders();
        httpOptions.append( 'Content-Type','applictaion/json;charset=UTF-8');

        return this.httpClient.get(environment.url_api + 'campos/buscarTodosVeiculos/' + pagina + '/'+ tamanhoPagina, {headers: httpOptions});
    }



}