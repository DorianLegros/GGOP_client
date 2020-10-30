import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ListTournaments {
  name: string;
  position: number;
  leader: string;
  membre: number;
}

export interface MyTournaments {
  name: string;
  position: number;
  leader: string;
  membre: number;
}


const ELEMENT_DATA_LISTE_TOURNAMENTS: ListTournaments[] = [
  {position: 1, name: 'ListTournaments', leader: 'Domingo', membre: 5},
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


const ELEMENT_DATA_MY_TOURNAMENTS: MyTournaments[] = [
  {position: 1, name: 'MyTournaments', leader: 'Domingo', membre: 5},
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
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.scss']
})
export class TournamentsListComponent implements OnInit {

  displayedColumnsListeTournaments: string[] = ['position', 'name', 'leader', 'membre'];
  dataSourceListeTournaments = new MatTableDataSource(ELEMENT_DATA_LISTE_TOURNAMENTS);

  displayedColumnsMyTournaments: string[] = ['position', 'name', 'leader', 'membre'];
  dataSourceMyTournaments = new MatTableDataSource(ELEMENT_DATA_MY_TOURNAMENTS);
  constructor() { }

  ngOnInit(): void {
  }
  applyFilterListeTournaments(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceListeTournaments.filter = filterValue.trim().toLowerCase();
  }

  applyFilterMyTournaments(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceMyTournaments.filter = filterValue.trim().toLowerCase();
  }
}
