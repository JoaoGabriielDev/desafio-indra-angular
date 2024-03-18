import { Historico } from './../modelo/Historico';
import { HistoricoService } from './../servico/historico.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-historico-precos',
  templateUrl: './historico-precos.component.html',
  styleUrl: './historico-precos.component.css'
})
export class HistoricoPrecosComponent {

  historico = new Historico();

  btnCadastro:boolean = true;

  mostrarTabela: boolean = false;

  mostrarTabelaDeCadastro() {
    this.mostrarTabela = true;
  }

  historicos:Historico[] = [];

  constructor(private servico: HistoricoService) { }

  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.historicos = retorno);
  }

  ngOnInit(){
    this.selecionar();
  }

  cadastrar():void{
    this.servico.cadastrar(this.historico)
    .subscribe(retorno => {

      this.historicos.push(retorno);

      this.historico = new Historico();

      alert('Usuario cadastrado com sucesso!');
    });
  }

  editar():void{

    this.servico.editar(this.historico)
    .subscribe(retorno => {

      let posicao = this.historicos.findIndex(obj => {
        return obj.id == retorno.id;
      });

      this.historicos[posicao] = retorno;

      this.historico = new Historico();

      this.btnCadastro = true;

      alert('Usuario alterado com sucesso!')

    });
  }

  delete():void{
    this.servico.delete(this.historico.id)
    .subscribe(retorno => {

      let posicao = this.historicos.findIndex(obj => {
        return obj.id == this.historico.id;
      });

      this.historicos.splice(posicao, 1);

      this.historico = new Historico;

      this.btnCadastro = true;

      alert('Usuario removido com sucesso!')

    });
  }

  cancelar():void{

    this.historico = new Historico();

    this.btnCadastro = true;

  }

  selecionarUsuario(posicao:number):void{

    this.historico = this.historicos[posicao];

    this.btnCadastro = false;

  }
}

