import { Component } from '@angular/core';
import { User } from '../modelo/User';
import { UserService } from '../servico/user.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent{

    btnCadastro:boolean = true;

    users:User[] = [];

    constructor(private servico:UserService){}

    selecionar():void{
      this.servico.selecionar()
      .subscribe(retorno => this.users = retorno);
    }

    ngOnInit(){
      this.selecionar();
    }
}
