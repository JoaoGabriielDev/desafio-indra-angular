import { Historico } from './../modelo/Historico';
import { HistoricoService } from './../servico/historico.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-historico-precos',
  templateUrl: './historico-precos.component.html',
  styleUrl: './historico-precos.component.css'
})
export class HistoricoPrecosComponent {

  btnCadastro:boolean = true;

  mostrarTabela: boolean = false;

  mostrarTabelaDeCadastro() {
    this.mostrarTabela = true;
  }

  historicos:Historico[] = [];

  constructor(private servico: HistoricoService) { }

  pesquisarDistribuidor(nome: string): void {
    this.servico.getDistribuidorByNome(nome)
      .subscribe(historicos => this.historicos.push(historicos));
  }

  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.historicos = retorno);
  }

  ngOnInit(){
    this.selecionar();
  }

}
