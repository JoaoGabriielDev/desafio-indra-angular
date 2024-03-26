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
  mediaCompra: number = 0;
  mediaVenda: number = 0;

  mediaCompraMunicipio: number = 0;
  mediaVendaMunicipio: number = 0;

// Variáveis para armazenar as médias de compra e venda por bandeira
  mediaCompraBandeira: number = 0;
  mediaVendaBandeira: number = 0;

  mediaPreco: number = 0;

  bandeira: string = '';

  regiao: string = '';
  precosRegiao: any[] = [];
  historicosRegiao: any[] = [];

  distribuidor: string = '';
  distribuidores: any[] = [];

  precosAgrupados: Map<string, Historico[]> = new Map();
  tabelaVisivel: boolean = true;

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
    this.obterDistribuidores();
    this.carregarPrecosAgrupados();
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
        .subscribe(precosRegiao => {
          this.historicosRegiao = precosRegiao;
        }, error => {
          console.error('Erro ao obter preços por região:', error);
        });
    }
  }

  obterDistribuidores(): void {
    if (this.distribuidor) {
      this.servico.getPrecoAgrupadoPorDistribuidor(this.distribuidor)
        .subscribe(response => {
          this.distribuidores = Object.entries(response).map(([key, value]) => ({ distribuidor: key, dados: value }));
        }, error => {
          console.error('Erro ao obter distribuidores:', error);
        });
    }
  }

  carregarPrecosAgrupados() {
    this.servico.obterPrecosAgrupadosPorDataColeta().subscribe(
      data => {
        this.precosAgrupados = data;
      },
      error => {
        console.log('Erro ao carregar os preços agrupados:', error);
      }
    );
  }
  toggleTable() {
    this.tabelaVisivel = !this.tabelaVisivel;
  }

  obterMediaCompraVendaPorMunicipio(): void {
    this.servico.obterMediaCompraVendaPorMunicipio(this.municipio)
      .subscribe(
        data => {
          if (data && data.mediaCompra !== undefined && data.mediaVenda !== undefined) {
            // Atribuir as médias de compra e venda específicas para o município
            this.mediaCompraMunicipio = data.mediaCompra;
            this.mediaVendaMunicipio = data.mediaVenda;
          } else {
            console.log('Dados inválidos recebidos do serviço:', data);
          }
        },
        error => {
          console.error('Erro ao obter a média de preço:', error);
        }
      );
  }

  obterMediaPrecoPorBandeira(): void {
    this.servico.obterMediaPrecoPorBandeira(this.bandeira)
      .subscribe(
        data => {
          if (data && data.mediaCompra !== undefined && data.mediaVenda !== undefined) {
            // Atribuir as médias de compra e venda específicas para a bandeira
            this.mediaCompraBandeira = data.mediaCompra;
            this.mediaVendaBandeira = data.mediaVenda;
          } else {
            console.log('Dados inválidos recebidos do serviço:', data);
          }
        },
        error => {
          console.error('Erro ao obter a média de preço:', error);
        }
      );
  }


}


