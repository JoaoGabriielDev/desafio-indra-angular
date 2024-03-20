import { Historico } from './../modelo/Historico';
import { HistoricoService } from './../servico/historico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-precos',
  templateUrl: './historico-precos.component.html',
  styleUrl: './historico-precos.component.css'
})
export class HistoricoPrecosComponent implements OnInit{
consultarDadosPorRegiao: any;
consultarMediaPrecoCombustivel() {
throw new Error('Method not implemented.');
}

  historico = new Historico();

  btnCadastro:boolean = true;

  historicos:Historico[] = [];

  municipio: string = '';
  mediaPreco: number = 0;

  regiao: string = '';
  precos: any[] = [];
  historicosRegiao: any[] = [];

  constructor(private servico: HistoricoService) { }

  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.historicos = retorno);
  }

  selecionarUsuario(posicao:number):void{

    this.historico = this.historicos[posicao];

    this.btnCadastro = false;
  }


  cadastrar():void{
    this.servico.cadastrar(this.historico)
    .subscribe(retorno => {

      this.historicos.push(retorno);

      this.historico = new Historico();

      this.btnCadastro = true;

      alert('Distribuidor cadastrado com sucesso!');
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

      alert('Distribuidor alterado com sucesso!')

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

      alert('Distribuidor removido com sucesso!')

    });
  }

  cancelar():void{

    this.historico = new Historico();

    this.btnCadastro = true;
  }

  ngOnInit(): void {
    this.selecionar();
  }

  obterMediaPrecoPorMunicipio(): void {
    this.servico.obterMediaPrecoPorMunicipio(this.municipio)
      .subscribe(media => {
        this.mediaPreco = media;
      }, error => {
        console.error('Erro ao obter a média de preço:', error);
      });
  }

  obterPrecosPorRegiao(): void {
    if (this.regiao) {
      this.servico.obterPrecosPorRegiao(this.regiao)
        .subscribe(precos => {
          this.historicosRegiao = precos;
        }, error => {
          console.error('Erro ao obter preços por região:', error);
        });
    }
  }
}

