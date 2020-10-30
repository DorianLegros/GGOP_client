import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(loginInfos): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'login', loginInfos, httpOptions);
  }

  register(user): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'register', user, httpOptions);
  }
}
