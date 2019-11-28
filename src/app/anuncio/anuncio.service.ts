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

    salvarImagem(imagem, veiculoId) {
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json');

        const formData: FormData = new FormData();
        console.log('ANNTES DE ENVIAR ', imagem);

        formData.append('imagens', imagem);
        formData.append('veiculoId', veiculoId);

        return this.httpClient.post(environment.url_api + "anuncio/salvarImagem", formData);
    }

    buscarVeiculoEspecifico(id) {
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json');

        return this.httpClient.get(environment.url_api + "anuncio/buscarDetalhesAnuncio/" + id, { headers: httpOptions });
    }

    buscarImagem(id) {

        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json');

        return this.httpClient.get(environment.url_api + "anuncio/buscarDetalhesAnuncio/buscarImagens/" + id, { headers: httpOptions });
    }

    editarVeiculo(dado) {
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json');

        return this.httpClient.post(environment.url_api + "anuncio/editar-anuncio", dado, { headers: httpOptions });
    }

    excluirVeiculo(idVeiculo){
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json');
        
        return this.httpClient.delete(environment.url_api + "anuncio/" + idVeiculo, {headers: httpOptions, responseType: 'text'});
    }

}