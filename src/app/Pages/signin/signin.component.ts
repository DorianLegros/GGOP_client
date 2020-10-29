import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  newUser: any = {};
  registerSuccessful = false;
  registerFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.register(this.newUser).subscribe(
      data => {
        console.log(data);
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
