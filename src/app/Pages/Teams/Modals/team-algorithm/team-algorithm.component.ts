import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {AlgorithmService} from '../../../../Services/algorithm.service';

@Component({
  selector: 'app-team-algorithm',
  templateUrl: './team-algorithm.component.html',
  styleUrls: ['./team-algorithm.component.scss']
})
export class TeamAlgorithmComponent implements OnInit {
  algoObject: any = {};
  compatiblePlayers: any[];
  compatiblePlayersDisplayOk = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private algorithmService: AlgorithmService) { }

  ngOnInit(): void {

  }

  async onSubmit() {
    const scoresProperties = [];
    if (!this.algoObject.excludePlayLevelScore) {
      scoresProperties.push('playLevelScore');
    }
    if (!this.algoObject.excludeFairPlayScore) {
      scoresProperties.push('fairPlayScore');
    }
    if (!this.algoObject.excludeCompatibilityScore) {
      scoresProperties.push('compabilityScore');
    }
    this.compatiblePlayers = await this.algorithmService.searchCompatiblePlayers(this.data.team.creator_id,
      this.algoObject.champion, this.algoObject.lane, this.algoObject.excludeSameLane, scoresProperties);
    this.compatiblePlayersDisplayOk = true;
  }
}
