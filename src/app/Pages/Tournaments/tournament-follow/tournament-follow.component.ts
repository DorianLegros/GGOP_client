import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

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
  selector: 'app-tournament-follow',
  templateUrl: './tournament-follow.component.html',
  styleUrls: ['./tournament-follow.component.scss']
})
export class TournamentFollowComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['name', 'leader', 'membre'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
