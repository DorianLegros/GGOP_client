import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private httpClient: HttpClient) { }

  getAllUsersProfile(): Observable<any> {
    return this.httpClient.get('api/userProfil');
  }

  getUserProfileById(userId): Observable<any> {
    return this.httpClient.get('api/userProfil/' + userId);
  }
}
