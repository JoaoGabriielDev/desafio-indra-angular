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
  
}
