import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {

  constructor(private httpClient: HttpClient) { }

  searchCompatiblePlayers(playerId, algoPlayerMainChampion, algoPlayerMainLane, algoPlayerExcludeSameMainLane, scoresProperties) {
    // define which score properties are taken in consideration by the player
    const algoPlayLevelScoreActive = !!scoresProperties.includes('playLevelScore');
    const algoFairPlayScoreActive = !!scoresProperties.includes('fairPlayScore');
    const algoCompatibilityScoreActive = !!scoresProperties.includes('compatibilityScore');

    // get player profile

    // get player reputation ratio from user profile

    // get player principal play period from user games history

    // get player games where it play at its main lane

    // with its main games, find its KDA rate and win rate


    // get the list of all users from the website

    // create a list from the first with scores properties

    // for each user in the list

      // get its main champion from its profile if not null

      // get its rank

      // for each game in its history

        // if its main champion is null, get the champion played to get the most played champion

        // get the time when the game was played, to get its principal play time period

        // find if the game is a classic game (to avoid ARAM players) and add it to "algoClassicGamesList"

      // if its main champion in user profile is null, get its most played champion

      // if its main champion is equal to player's main champion, they're not compatible
      if (algoCompatibilityScoreActive) {
        continue;
      }

      // if the classic games list is empty, its score is 0

      // get its reputation ratio

      // get its principal play period time

      // for each classic game in classic games list

        // get KDA rate and winrate

      // make comparisons between player infos and targeted user to define a score for each score

      // define global score

      // if global score is greater or equal to 3, targeted user is placed in the compatible players list

    // return list of compatible players
}
