import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {HonorComponent} from '../Modals/honor/honor.component';
import {ReportComponent} from '../Modals/report/report.component';
import {TokenStorageService} from '../../../Services/token-storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  username: string;

  constructor(private dialog: MatDialog, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    const sessionUser = this.tokenStorage.getUser();
    this.username = sessionUser.username;
  }

  openDialogHonor() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(HonorComponent, dialogConfig);
  }

  openDialogReport() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(ReportComponent, dialogConfig);
  }
}
