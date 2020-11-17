import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PrivacyComponent} from './Modals/privacy/privacy.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogPrivacy() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(PrivacyComponent, dialogConfig);
  }

}
