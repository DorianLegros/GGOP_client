import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import {RiotServer} from '../../Models/riot-server';
import {RiotServerService} from '../../Services/riot-server.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../Services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  newUser: any = {};
  riotServersList: RiotServer[];
  policyAccepted = false;
  registerSuccessful = false;
  registerFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private riotServerService: RiotServerService,
              private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getUser()) {
      this.router.navigate(['/profil']);
    }
    this.riotServerService.getAllRiotServers().subscribe(riotServers => {
      this.riotServersList = riotServers;
    });
  }

  onSubmit() {
    this.authService.register(JSON.stringify(this.newUser)).subscribe(
      data => {
        this.registerSuccessful = true;
        this.registerFailed = false;

        this.router.navigate(['/connexion']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.registerFailed = true;
      }
    );
  }
}
