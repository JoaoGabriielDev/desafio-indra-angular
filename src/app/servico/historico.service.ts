import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historico } from '../modelo/Historico';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  private url: string = 'http://localhost:8080/preco-combustivel';

  constructor(private http:HttpClient) { }

  selecionar():Observable<Historico[]>{
    return this.http.get<Historico[]>(this.url);
  }

  cadastrar(obj:Historico):Observable<Historico>{
    return this.http.post<Historico>(this.url, obj);
  }

  editar(obj:Historico):Observable<Historico>{
    return this.http.put<Historico>(this.url, obj);
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }

  obterMediaPrecoPorMunicipio(municipio: string): Observable<number> {
    return this.http.get<number>(`http://localhost:8080/preco-combustivel/media-por-municipio?municipio=${municipio}`);
  }

  obterPrecosPorRegiao(regiao: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/preco-combustivel/por-regiao?regiao=${regiao}`);
  }

  getPrecoAgrupadoPorDistribuidor(distribuidor: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/preco-combustivel/agrupado-por-distribuidor?distribuidor=${distribuidor}`);
  }

  obterPrecosAgrupadosPorDataColeta(): Observable<Map<string, Historico[]>> {
    return this.http.get<Map<string, Historico[]>>(`http://localhost:8080/preco-combustivel/agrupado-por-data-coleta`);
  }

  obterMediaCompraVendaPorMunicipio(municipio: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/preco-combustivel/media-compra-venda-por-municipio?municipio=${municipio}`);
  }

}


