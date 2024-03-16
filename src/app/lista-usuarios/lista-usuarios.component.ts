import { User } from './../modelo/User';
import { Component } from '@angular/core';
import { UserService } from '../servico/user.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent{

    user = new User();

    btnCadastro:boolean = true;

    users:User[] = [];

    tabela:boolean = true;

    constructor(private servico:UserService){}

    selecionar():void{
      this.servico.selecionar()
      .subscribe(retorno => this.users = retorno);
    }

    ngOnInit(){
      this.selecionar();
    }

    cadastrar():void{
      this.servico.cadastrar(this.user)
      .subscribe(retorno => {

        this.users.push(retorno);

        this.user = new User();

        alert('Usuario cadastrado com sucesso!');
      });
    }

    editar():void{

      this.servico.editar(this.user)
      .subscribe(retorno => {

        let posicao = this.users.findIndex(obj => {
          return obj.id == retorno.id;
        });

        this.users[posicao] = retorno;

        this.user = new User();

        this.btnCadastro = true;

        this.tabela = true;

        alert('Usuario alterado com sucesso!')

      });
    }

    delete():void{
      this.servico.delete(this.user.id)
      .subscribe(retorno => {

        let posicao = this.users.findIndex(obj => {
          return obj.id == this.user.id;
        });

        this.users.splice(posicao, 1);

        this.user = new User;

        this.btnCadastro = true;

        this.tabela = true;

        alert('Usuario removido com sucesso!')

      });
    }

    cancelar():void{

      this.user = new User;

      this.btnCadastro = true;

      this.tabela = true;
    }

    selecionarUsuario(posicao:number):void{

      this.user = this.users[posicao];

      this.btnCadastro = false;

      this.tabela = false;
    }
}
