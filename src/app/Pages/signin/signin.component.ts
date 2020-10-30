import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import {RiotServer} from '../../Models/riot-server';

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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  onSubmit() {
    this.authService.register(this.newUser).subscribe(
      data => {
        this.registerSuccessful = true;
        this.registerFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.registerFailed = true;
      }
    );
  }
}
