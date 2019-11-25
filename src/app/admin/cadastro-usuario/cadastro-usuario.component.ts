import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Usuario } from 'src/app/shared/models/usuario';

@Component({
    selector: 'cadastroUser-app',
    templateUrl: 'cadastro-usuario.component.html'
})

export class CadastroUsuarioComponent implements OnInit {
    usuario = new Usuario();
    formCadastro: FormGroup;

    listaPerfis = [
        {
            nome: 'Vendedor/Comprador',
            value: 'nrm'
        },
        {
            nome: 'Administrador',
            value: 'adm'
        }
       
    ]
  
    constructor(
        private adminService: AdminService,
        private toastrService: ToastrService,
        private router: Router,
        private fb: FormBuilder,
    ) {

    }

    ngOnInit(): void {
        this.formCadastro = this.fb.group({
            nome: ['', Validators.required],
            sobrenome: ['', Validators.required],
            email: ['', Validators.email],
            senha: ['', Validators.required],
            acesso: ['', Validators.required],
            telefone: ['',Validators.required]
        });
    }

    getPerfil(perfil){
        this.usuario.perfil = perfil;
    }

    cadastrar(): void {
        this.usuario.username = this.formCadastro.get('nome').value;
        this.usuario.lastname = this.formCadastro.get('sobrenome').value;
        this.usuario.email = this.formCadastro.get('email').value;
        this.usuario.password = this.formCadastro.get('senha').value;
        this.usuario.perfil = this.formCadastro.get('acesso').value;
        this.usuario.telefone = this.formCadastro.get('telefone').value;
        this.usuario.enable = true;
        this.adminService.cadastrarUsuario(this.usuario).subscribe(
            (data) => {
                this.toastrService.success(data, 'Sucesso');
                this.router.navigateByUrl('menu/tela-inicial');
            },
            (error) => {
                console.log('Erro ao cadastrar usuario', error);
            }
        );
    }

}
