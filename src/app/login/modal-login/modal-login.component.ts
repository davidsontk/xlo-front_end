import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Usuario } from 'src/app/shared/models/usuario';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  formLogin: FormGroup;
  load: boolean = false;

  constructor(private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: ['', Validators.email],
      senha: ['', Validators.required]
    });
  }

  entrar() {
    this.load = true;
    let usuario: Usuario = new Usuario();
    usuario.email = this.formLogin.get('email').value;
    usuario.password = this.formLogin.get('senha').value;
    this.loginService.logar(usuario).subscribe(
      (data: any) => {
        console.log('DADO QUE CHEGOU ', data);
        sessionStorage.setItem('user', JSON.stringify(data.usuario));
        console.log('passei por aqui');
        this.router.navigateByUrl('tela');
      },
      (error) => {
        console.log('Erro ao tentar logar = ', error);

      }
    );
  }

}
