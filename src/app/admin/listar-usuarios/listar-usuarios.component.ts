import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario';

@Component({
    selector: 'listar-usuarios-app',
    templateUrl: 'listar-usuarios.component.html'
})

export class ListarUsuariosComponent implements OnInit {

    constructor(private adminService: AdminService) { }

    ngOnInit() { }

    listaUsuarios: Usuario[] = [];

    buscarUsuarios() {
        this.adminService.listarUsuarios().subscribe(
            (data) => {
                console.log('Usuarios recebidos', data);
            },
            (error) => {
                console.log('Erro ao buscar usuarios', error);
            }
        );
    }

}