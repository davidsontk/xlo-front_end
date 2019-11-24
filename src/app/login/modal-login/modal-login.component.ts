import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  
  @Output() fecharModal = new EventEmitter<string>();

  constructor(private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService) { }

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
        this.toastrService.success('Usuario Logado');
        sessionStorage.setItem('user', JSON.stringify(data));
        this.fecharModal.emit(data.message);
      },
      (error: any) => {
        console.log
        if (error.error.error == 'Unauthorized' && error.error.status == 401) {
          this.toastrService.error('E-mail ou senha incorretos', 'Erro');
        } else {
          console.log('Erro ao tentar logar = ', error);
        }
      }
    );
  }

}
