import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface ListTournaments {
  name: string;
  leader: string;
  membre: number;
}

export interface MyTournaments {
  name: string;
  leader: string;
  date: string;
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
  {name: 'MyTournaments', leader: 'Domingo', date: 'En cours'},
  {name: 'Fnatic', leader: 'Charles', date: '18/11/2020 à 16:00'},
  {name: 'Cloud9', leader: 'Nuage neuf', date: '15/10/2020 à 14:30'},
  {name: 'Unicorn of Love', leader: 'Duonicorn', date: '15/10/2020 à 10:30'},
  {name: 'SKTT1', leader: 'Faker', date: '10/10/2020 à 11:30'},
  {name: 'Gros chinois', leader: 'Faker', date: '2/10/2020 à 20:30'},
  {name: 'Brother of texas', leader: 'Chuck Noris', date: '19/09/2020 à 9:30'},
  {name: 'Pussycat dols', leader: 'Ariana Grand dé', date: '4/8/2020 à 22:30'},
  {name: 'Team Skeat', leader: 'Jordi el ninio', date: '17/07/2020 à 15:15'},
  {name: 'Taxi Driver', leader: 'Manu Payet', date: '12/07/2020 à 15:15'},
];

@Component({
  selector: 'app-matchmakings-list',
  templateUrl: './matchmakings-list.component.html',
  styleUrls: ['./matchmakings-list.component.scss']
})
export class MatchmakingsListComponent implements OnInit {

  displayedColumnsListeTournaments: string[] = ['name', 'leader', 'membre'];
  dataSourceListeTournaments = new MatTableDataSource(ELEMENT_DATA_LISTE_TOURNAMENTS);

  displayedColumnsMyTournaments: string[] = ['name', 'leader', 'date'];
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
