import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RiotServerService {

  constructor(private httpClient: HttpClient) { }

  getAllRiotServers(): Observable<any> {
    return this.httpClient.get('riotServer');
  }
}
