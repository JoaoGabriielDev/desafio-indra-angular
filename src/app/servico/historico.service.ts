import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historico } from '../modelo/Historico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  private url: string = 'http://localhost:8080//historicos';

  constructor(private http:HttpClient) { }

  getDistribuidorByNome(nome: string): Observable<Historico> {
    const url = `${this.url}/pesquisar?nome=${nome}`;
    return this.http.get<Historico>(url);
  }

  selecionar():Observable<Historico[]>{
    return this.http.get<Historico[]>(this.url);
  }

}
