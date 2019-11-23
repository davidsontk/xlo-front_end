import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AnuncioService {

    constructor(private httpClient: HttpClient) { }


    buscarVeiculosPorUsuario(nomeUsuario: string) {
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json');

        return this.httpClient.get(environment.url_api + 'anuncio/buscaVeiculoPorUsuario/' + nomeUsuario, { headers: httpOptions });
    }

}