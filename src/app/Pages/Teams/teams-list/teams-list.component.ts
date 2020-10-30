import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ListTeam {
  name: string;
  position: number;
  leader: string;
  membre: number;
}


const ELEMENT_DATA: ListTeam[] = [
  {position: 1, name: 'List Team', leader: 'Domingo', membre: 5},
  {position: 2, name: 'Fnatic', leader: 'Charles', membre: 5},
  {position: 3, name: 'Cloud9', leader: 'Nuage neuf', membre: 4},
  {position: 4, name: 'Unicorn of Love', leader: 'Duonicorn', membre: 3},
  {position: 5, name: 'SKTT1', leader: 'Faker', membre: 5},
  {position: 6, name: 'Gros chinois', leader: 'Faker', membre: 5},
  {position: 7, name: 'Brother of texas', leader: 'Chuck Noris', membre: 5},
  {position: 8, name: 'Pussycat dols', leader: 'Ariana Grand dé', membre: 4},
  {position: 9, name: 'Team Skeat', leader: 'Jordi el ninio', membre: 5},
  {position: 10, name: 'Taxi Driver', leader: 'Manu Payet', membre: 4},
];


@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'leader', 'membre'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
