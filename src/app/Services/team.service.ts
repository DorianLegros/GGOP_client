import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient: HttpClient) { }

  createTeam(teamInfos) {
    return this.httpClient.post('api/team', teamInfos);
  }

  getUserTeamsById(userId) {
    return this.httpClient.get('api/team/' + userId);
  }
}
