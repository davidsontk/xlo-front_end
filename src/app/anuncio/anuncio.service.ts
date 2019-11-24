import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from '../shared/models/veiculo';
import { Opcional } from '../shared/models/opcional';

@Injectable()
export class AnuncioService {

    constructor(private httpClient: HttpClient) { }


    buscarVeiculosPorUsuario(nomeUsuario: string) {
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json');

        return this.httpClient.get(environment.url_api + 'anuncio/buscaVeiculoPorUsuario/' + nomeUsuario, { headers: httpOptions });
    }

    buscarOpcionais() {
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'applictaion/json;charset=UTF-8');

        return this.httpClient.get(environment.url_api + "anuncio/opcionais", { headers: httpOptions });
        //return this.httpClient.get(environment.url_api + 'campos/buscarTodosVeiculos/' + pagina + '/'+ tamanhoPagina, {headers: httpOptions});


    }

    cadastroVeiculo(veiculo: Veiculo, opcionais: Opcional[], imagens: String[]) {
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'applictaion/json;charset=UTF-8');

        let anuncio = { 
            opcionais: 'opcionais', 
            veiculo: 'veiculo', 
            imagens: 'imagens' };
        return this.httpClient.post(environment.url_api + "anuncio/cadastro-anuncio", anuncio, { headers: httpOptions });
    }

}