import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Team} from '../../../Models/team';
import {TeamService} from '../../../Services/team.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PrivacyComponent} from '../../settings/Modals/privacy/privacy.component';
import {TeamAlgorithmComponent} from '../Modals/team-algorithm/team-algorithm.component';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {
  id: string;
  private sub: any;
  displayOk = false;
  team: Team;
  teamPlayerIndexArray = [0, 1, 2, 3, 4];

  constructor(private route: ActivatedRoute, private teamService: TeamService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.teamService.getTeamById(this.id).subscribe(team => {
        this.team = team;
        this.displayOk = true;
      });
    });
  }

  openDialog(team) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      team
    };
    this.dialog.open(TeamAlgorithmComponent, dialogConfig);
  }
}
