import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {HonorComponent} from '../Modals/honor/honor.component';
import {ReportComponent} from '../Modals/report/report.component';
import {MatTableDataSource} from '@angular/material/table';
import {HistoricComponent} from '../Modals/historic/historic.component';

export interface MyTeam {
  name: string;
  leader: string;
  membre: number;
}


const ELEMENT_DATA: MyTeam[] = [
  {name: 'My Team', leader: 'Domingo', membre: 5},
  {name: 'Fnatic', leader: 'Charles', membre: 5},
  {name: 'Cloud9', leader: 'Nuage neuf', membre: 4},
  {name: 'Unicorn of Love', leader: 'Duonicorn', membre: 3},
  {name: 'SKTT1', leader: 'Faker', membre: 5},
  {name: 'Gros chinois', leader: 'Faker', membre: 5},
  {name: 'Brother of texas', leader: 'Chuck Noris', membre: 5},
  {name: 'Pussycat dols', leader: 'Ariana Grand dé', membre: 4},
  {name: 'Team Skeat', leader: 'Jordi el ninio', membre: 5},
  {name: 'Taxi Driver', leader: 'Manu Payet', membre: 4},
];

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  displayedColumns: string[] = ['name', 'leader', 'membre'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {
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
