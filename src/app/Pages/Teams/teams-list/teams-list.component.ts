import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {TeamService} from '../../../Services/team.service';
import {TokenStorageService} from '../../../Services/token-storage.service';

export interface ListTeam {
  name: string;
  leader: string;
  membre: number;
}


const ELEMENT_DATA: ListTeam[] = [
  {name: 'List Team', leader: 'Domingo', membre: 5},
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
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  newTeam: any = {};
  displayedColumns: string[] = ['name', 'leader', 'membre'];
  dataSource;
  teamCreationFailed = false;
  errorMessage = '';

  constructor(private teamService: TeamService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    const sessionUser = this.tokenStorageService.getUser();
    this.teamService.getUserTeamsById(sessionUser.userId).subscribe(teams => {
      console.log(teams);
      this.dataSource = teams;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmit() {
    console.log(this.newTeam);
    const sessionUser = this.tokenStorageService.getUser();
    this.newTeam.creator_id = sessionUser.userId;
    this.teamService.createTeam(JSON.stringify(this.newTeam)).subscribe(data => {
      console.log(data);
    }, error => {
      this.errorMessage = error.error;
      this.teamCreationFailed = true;
    });
  }

}
