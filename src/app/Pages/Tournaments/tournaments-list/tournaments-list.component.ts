import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ListTournaments {
  name: string;
  leader: string;
  membre: number;
}

export interface MyTournaments {
  name: string;
  leader: string;
  membre: number;
}


const ELEMENT_DATA_LISTE_TOURNAMENTS: ListTournaments[] = [
  {name: 'ListTournaments', leader: 'Domingo', membre: 5},
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


const ELEMENT_DATA_MY_TOURNAMENTS: MyTournaments[] = [
  {name: 'MyTournaments', leader: 'Domingo', membre: 5},
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
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.scss']
})
export class TournamentsListComponent implements OnInit {

  displayedColumnsListeTournaments: string[] = ['name', 'leader', 'membre'];
  dataSourceListeTournaments = new MatTableDataSource(ELEMENT_DATA_LISTE_TOURNAMENTS);

  displayedColumnsMyTournaments: string[] = ['name', 'leader', 'membre'];
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
