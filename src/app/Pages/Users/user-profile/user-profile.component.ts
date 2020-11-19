import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {HonorComponent} from '../Modals/honor/honor.component';
import {ReportComponent} from '../Modals/report/report.component';
import {MatTableDataSource} from '@angular/material/table';
import {HistoricComponent} from '../Modals/historic/historic.component';
import {TokenStorageService} from '../../../Services/token-storage.service';

export interface MyTeam {
  name: string;
  leader: string;
  membre: number;
}


const ELEMENT_DATA: MyTeam[] = [
  {name: 'My Team', leader: 'Rayleigh', membre: 5},
  {name: 'My Second Team', leader: 'TooFat4You', membre: 5},
  {name: 'My Third Team', leader: 'Druxys', membre: 4},
  {name: 'Another One', leader: 'DoRaideN', membre: 3},
  {name: 'Ones More', leader: 'High Noon McCree', membre: 5},
];

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  username: string;
  constructor(private dialog: MatDialog, private tokenStorage: TokenStorageService) { }

  displayedColumns: string[] = ['name', 'leader', 'membre'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

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

  openDialogHistoric() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '95vw';
    dialogConfig.width = '100%';
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    this.dialog.open(HistoricComponent, dialogConfig);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
