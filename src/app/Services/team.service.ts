import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient: HttpClient) { }

  createTeam(teamInfos) {
    return this.httpClient.post('api/team', teamInfos);
  }

  getUserTeamsById(userId): Observable<any> {
    return this.httpClient.get('api/team/' + userId);
  }

  getTeamById(id): Observable<any> {
    return this.httpClient.get('api/team/byID/' + id);
  }
}
