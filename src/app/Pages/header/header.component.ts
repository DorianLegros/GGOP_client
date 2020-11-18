import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../Services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    const sessionUser = this.tokenStorage.getUser();
    this.username = sessionUser.username;
  }

}
