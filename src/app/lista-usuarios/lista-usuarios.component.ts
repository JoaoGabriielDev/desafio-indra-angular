import { Component, OnInit } from '@angular/core';
import { User } from '../modelo/User';
import { UserService } from '../servico/user.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit{

    btnCadastro:boolean = true;

    users:User[] = [];

    constructor(private servico:UserService){}

    ngOnInit(): void {
      this.loadUsers();
    }

    loadUsers() {
      this.servico.getUsers().subscribe(
        (data: User[]) => {
          this.users = data;
        },
        error => {
          console.error('Erro ao carregar usuários:', error);
        }
      );
      }
}
