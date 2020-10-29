import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './Services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private tokenStorage: TokenStorageService) {
  }

  private roles: string[];
  isLoggedIn = false;
  isAdmin = false;
  username: string;

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.roles = user.roles;

      this.isAdmin = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
