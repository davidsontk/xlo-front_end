import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
    selector: 'listar-usuarios-app',
    templateUrl: 'listar-usuarios.component.html'
})

export class ListarUsuariosComponent implements OnInit {

    constructor(private router:Router , private adminService: AdminService,
        private route: ActivatedRoute) { }

    ngOnInit() { 
        this.buscarUsuarios();
    
    
        console.log('listarusuarioscomponent');
    }

     listaUsuarios:Usuario;

 //   listaUsuarios: Usuario[] = [];
   //     listaUsuarios: String[][] ;
    buscarUsuarios() {
        console.log('buscarusuarios()');
        this.adminService.listarUsuarios().subscribe(
            (data: Usuario) => {
                console.log('Usuarios recebidos', data);
                this.listaUsuarios = data;
            },
            (error) => {
                console.log('Erro ao buscar usuarios', error);
            }
        );
    }

    rotaEditarUsuario(usr:Usuario){
        console.log('rotaeditar', usr);
        localStorage.removeItem("editUsuario");
        localStorage.setItem("editUsuario",JSON.stringify(usr));
        this.router.navigateByUrl('/admin/editar-usuario');
    }

}