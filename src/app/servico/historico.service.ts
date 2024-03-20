import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historico } from '../modelo/Historico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  [x: string]: any;

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

}
