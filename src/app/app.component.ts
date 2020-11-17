import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './Services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private tokenStorage: TokenStorageService, private router: Router) {
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
    } else {
      this.router.navigate(['/connexion']);
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
