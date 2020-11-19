import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../../Services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-disconnect',
  templateUrl: './disconnect.component.html',
  styleUrls: ['./disconnect.component.scss']
})
export class DisconnectComponent implements OnInit {

  constructor( private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['/connexion']);
    window.location.reload();
  }
}
