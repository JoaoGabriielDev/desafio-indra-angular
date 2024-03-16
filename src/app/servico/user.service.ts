import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modelo/User';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  private url: string = 'http://localhost:8080/users';

  constructor(private http:HttpClient) {}

  selecionar():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  cadastrar(obj:User):Observable<User>{
    return this.http.post<User>(this.url, obj);
  }

  editar(obj:User):Observable<User>{
    return this.http.put<User>(this.url, obj);
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }


}

