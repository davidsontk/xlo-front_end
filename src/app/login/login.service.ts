import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './../shared/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {

    constructor(private httpClient: HttpClient) { }

    /**
     * @method logar
     * @description Metodo que envia ao back end os dados para logar
     * @returns TODO - verificar
     */
    logar(usuario: Usuario){
        let body = {
            email: usuario.email,
            password: usuario.password
        };
        console.log(body);
        return this.httpClient.post(environment.url_api + 'login', body);
    }


}