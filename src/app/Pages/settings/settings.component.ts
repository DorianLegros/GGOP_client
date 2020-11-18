import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PrivacyComponent} from './Modals/privacy/privacy.component';
import {TokenStorageService} from '../../Services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private dialog: MatDialog, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  openDialogPrivacy() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(PrivacyComponent, dialogConfig);
  }

  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['/connexion']);
  }
}
