import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';

@Injectable()
export class CadastroAnuncioService {
    
    constructor(private httpClient: HttpClient) { }
    
    buscarOpcionais() {
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json;charset=UTF-8');

        return this.httpClient.get(environment.url_api + "anuncio/opcionais");
    }
}