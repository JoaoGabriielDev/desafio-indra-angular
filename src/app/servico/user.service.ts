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

  getUsers(): Observable<User[]> { // Indicar explicitamente que getUsers() retorna um Observable
    return this.http.get<User[]>(`${this.url}/`);
  }
}
