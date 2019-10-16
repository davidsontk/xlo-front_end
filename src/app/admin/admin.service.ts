import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable()
export class AdminService {

    constructor(private httpClient: HttpClient) { }


    listarUsuarios(){
        const headers = new HttpHeaders();
        headers.append('Authorization',' this.toke');

        return this.httpClient.get(environment.url_api + "users", {headers});
    }

    
}