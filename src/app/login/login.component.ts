import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login-app',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
    constructor(private loginService: LoginService) { }

    ngOnInit() { }


    entrarComCredenciais(usuario: any) {
        this.loginService.logar(usuario).subscribe(
            (data) => {
                console.log('DADO QUE CHEGOU ', data);
            },
            (error) => {
                console.log('DEU erro = ',  error);
            }
        );
    }

}