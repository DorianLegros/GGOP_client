import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {TokenStorageService} from '../../Services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInfos: any = {};
  loginFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getUser()) {
      this.router.navigate(['/profil']);
    }
  }

  onSubmit() {
    this.authService.login(JSON.stringify(this.loginInfos)).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        delete data.token;
        this.tokenStorage.saveUser(data);

        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.loginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
