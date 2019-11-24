import { Usuario } from 'src/app/shared/models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AdminService {

    constructor(private httpClient: HttpClient) { }


    listarUsuarios() {
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json');

        return this.httpClient.get(environment.url_api + "users", { headers: httpOptions });
    }

    cadastrarUsuario(usuario: Usuario) {
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json');

        return this.httpClient.post(environment.url_api + 'users',  usuario, { headers: httpOptions, responseType: 'text' });
    }


    //FALTA MECHER A PARTIR DAQUI ATÉ BACKEND
    editarUsuario(usuario: Usuario) {
        let httpOptions = new HttpHeaders();
        httpOptions.append('Content-Type', 'application/json');

        return this.httpClient.post(environment.url_api + 'alterarUsuario',  usuario, { headers: httpOptions});
    }


}