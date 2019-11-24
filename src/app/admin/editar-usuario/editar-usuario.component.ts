import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/shared/models/usuario';
import { ActivatedRoute,Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import {first} from "rxjs/operators";

@Component({
    selector: 'editar-usuario-app',
    templateUrl: 'editar-usuario.component.html'
})

export class EditarUsuarioComponent implements OnInit {

    form: FormGroup;


    listaPerfis = [
        {
            nome: 'Vendedor/Comprador',
            value: 'nrm'
        },
        {
            nome: 'Administrador',
            value: 'admin'
        }
       
    ]
    getPerfil(perfil){
        this.usu.perfil = perfil;
    }


        constructor(
            private adminService: AdminService,
            private fb: FormBuilder,
            private route: ActivatedRoute,
            private toastrService: ToastrService,
            private router: Router,

        ) { }

    usu:Usuario;

    ngOnInit() { 
       let usu=JSON.parse(localStorage.getItem("editUsuario"));
        console.log('editar-usuario-component.ts: ', usu);

        this.form = this.fb.group({
            id: [],
            email: ['', Validators.required],
            username: ['', Validators.required],
            lastname: ['', Validators.required],
            password:[],
            perfil:[''],
            enable:[]
          });

        this.form.setValue(usu);
    }


    editarUsuario(): void {
        console.log('editar-usuario-component.ts:editarusuario() ', this.form.value);
        // this.usu.username = this.form.get('username').value;
        // this.usu.lastname = this.form.get('lastname').value;
        // this.usu.email = this.form.get('email').value;
        // // this.usu.password = this.form.get('senha').value;
        // this.usu.perfil = this.form.get('perfil').value;
        // this.usu.enable = true;
        // this.adminService.editarUsuario(this.usu).subscribe(
        //     (data) => {
        //         this.toastrService.success(data, 'Sucesso ao editar');
        //     },
        //     (error) => {
        //         console.log('Erro ao tentar editar usuario', error);
        //     }
        // );

        this.adminService.editarUsuario(this.form.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigateByUrl('/alterarUsuario');
          },
          error => {
            alert(error);
          });
    }
}