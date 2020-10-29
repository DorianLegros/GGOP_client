import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_ROUTE = 'http://localhost:8000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(loginInfos): Observable<any> {
    return this.httpClient.post(API_ROUTE + 'login', loginInfos, httpOptions);
  }

  register(user): Observable<any> {
    return this.httpClient.post(API_ROUTE + 'register', user, httpOptions);
  }
}
