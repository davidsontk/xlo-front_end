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
        httpOptions.append('Content-Type', 'application/json');

        return this.httpClient.get(environment.url_api + "anuncio/opcionais", { headers: httpOptions });
        //return this.httpClient.get(environment.url_api + 'campos/buscarTodosVeiculos/' + pagina + '/'+ tamanhoPagina, {headers: httpOptions});


    }

    cadastroVeiculo(dado) {
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json');

        return this.httpClient.post(environment.url_api + "anuncio/cadastro-anuncio", dado, { headers: httpOptions });
    }

    salvarImagem(anuncio, imagem) {
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json');
        const formData: FormData = new FormData();
        formData.append('imagens', imagem);
        formData.append('veiculoId', anuncio.id)
        return this.httpClient.post(environment.url_api + "anuncio/cadastro-anuncio/salvarImagem", formData);
    }
}