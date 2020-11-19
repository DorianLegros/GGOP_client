import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {HonorComponent} from '../Modals/honor/honor.component';
import {ReportComponent} from '../Modals/report/report.component';

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
  selector: 'app-user-profile-teams',
  templateUrl: './user-profile-teams.component.html',
  styleUrls: ['./user-profile-teams.component.scss']
})
export class UserProfileTeamsComponent implements OnInit {

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
