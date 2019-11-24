import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';
import { Veiculo } from 'src/app/shared/models/veiculo';
import { Opcional } from 'src/app/shared/models/opcional';
import { ViewUpdateFn } from '@angular/core/src/view';


@Injectable()
export class CadastroAnuncioService {
    
    constructor(private httpClient: HttpClient) { }
    
    buscarOpcionais() {
        let httpOptions = new HttpHeaders();
        httpOptions.append( 'Content-Type','applictaion/json;charset=UTF-8');
        
        return this.httpClient.get(environment.url_api + "anuncio/opcionais");
        //return this.httpClient.get(environment.url_api + 'campos/buscarTodosVeiculos/' + pagina + '/'+ tamanhoPagina, {headers: httpOptions});
    }
    
    cadastroVeiculo(veiculo: Veiculo, opcionais: Opcional[], imagens:String[]){
        let httpOptions = new HttpHeaders();
        httpOptions.append( 'Content-Type','applictaion/json;charset=UTF-8');
        
        let dados = {opcionais:opcionais,veiculo:veiculo,imagens:imagens};

        console.log(dados);
        return this.httpClient.post(environment.url_api + "anuncio/cadastro-anuncio",dados, { headers: httpOptions, responseType: 'text' });
    }    
}