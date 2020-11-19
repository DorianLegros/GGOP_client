import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PrivacyComponent} from './Modals/privacy/privacy.component';
import {DisconnectComponent} from './Modals/disconnect/disconnect.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogDisconnect() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(DisconnectComponent, dialogConfig);
  }

  openDialogPrivacy() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(PrivacyComponent, dialogConfig);
  }
}
