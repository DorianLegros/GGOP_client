import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  leader: string;
  membre: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Team Pax', leader: 'Domingo', membre: 5},
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

  displayedColumns: string[] = ['position', 'name', 'leader', 'membre'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
