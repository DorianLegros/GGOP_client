import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfileService} from './user-profile.service';
import {UserProfile} from '../Models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {

  constructor(private httpClient: HttpClient, private userProfileService: UserProfileService) {
  }

  async searchCompatiblePlayers(playerId, algoPlayerMainChampion, algoPlayerMainLane, algoPlayerExcludeSameMainLane, scoresProperties) {
    // define which score properties are taken in consideration by the player
    const algoPlayLevelScoreActive = !!scoresProperties.includes('playLevelScore');
    const algoFairPlayScoreActive = !!scoresProperties.includes('fairPlayScore');
    const algoCompatibilityScoreActive = !!scoresProperties.includes('compatibilityScore');

    // get player profile
    const user: UserProfile = await this.userProfileService.getUserProfileById(playerId).toPromise();

    // get player reputation ratio from user profile
    const algoPlayerRank = user.rank;
    const algoPlayerReputationRatio = user.reputation.ratio;

    // get player principal play hour from user games history
    const algoPlayerPlayHour = this.getPlayerPrincipalPlayHourFromGameHistory(user);

    // get player games where it play at its main lane
    const algoPlayerPrincipalGamesList = this.getPlayerPrincipalGamesFromGameHistory(user, algoPlayerMainLane);

    // with its main games, find its KDA rate and win rate
    const algoPlayerKDAAverage = this.getKDARateFromGameList(user.userId, algoPlayerPrincipalGamesList);
    const algoPlayerWinRate = this.getWinRateFromGamesList(algoPlayerPrincipalGamesList);


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

  getPlayerPrincipalPlayHourFromGameHistory(user: UserProfile) {
    let playerPlayHour = 0;
    const playerPlayHoursArray = [];
    const playerUniquePlayHoursArray = [];

    user.gameHistory.forEach((game) => {
      const playHour = game.date.getHours();
      playerPlayHoursArray.push(playHour);
      if (!playerUniquePlayHoursArray.includes(playHour)) { playerUniquePlayHoursArray.push(playHour); }
    });

    // get principal play hour
    let playerNumberPlayedInPrincipalHour = 0;
    playerUniquePlayHoursArray.forEach((hour) => {
      const playerNumberPlayedInHour = playerPlayHoursArray.filter((value => { value === hour; })).length;
      if (playerNumberPlayedInHour > playerNumberPlayedInPrincipalHour) {
        playerNumberPlayedInPrincipalHour = playerNumberPlayedInHour;
        playerPlayHour = hour;
      }
    });

    return playerPlayHour;
  }

  getPlayerPrincipalGamesFromGameHistory(user: UserProfile, lane: string) {
    const playerPrincipalGames = [];

    user.gameHistory.forEach((game) => {
      if (game.gameMode === 'CLASSIC') {
        let userTeam;
        game.teams.forEach((team) => {
          if (team.win === game.result) { userTeam = team; }
        });
        let userGameStats;
        userTeam.forEach((player) => {
          if (player.userId === user.id) { userGameStats = player; }
        });
        if (userGameStats.lane === lane) {
          playerPrincipalGames.push(game);
        }
      }
    });

    return playerPrincipalGames;
  }

  getKDARateFromGameList(userId, gameList) {
    const killsValuesArray = [];
    const deathsValuesArray = [];
    const assistsValuesArray = [];

    gameList.forEach((game) => {
      let userTeam;
      game.teams.forEach((team) => {
        if (team.win === game.result) { userTeam = team; }
      });
      let userGameStats;
      userTeam.forEach((player) => {
        if (player.userId === userId) { userGameStats = player; }
      });
      killsValuesArray.push(userGameStats.kills);
      deathsValuesArray.push(userGameStats.deaths);
      assistsValuesArray.push(userGameStats.assists);
    });

    const killsAverage = this.getAverage(killsValuesArray);
    const deathsAverage = this.getAverage(deathsValuesArray);
    const assistsAverage = this.getAverage(assistsValuesArray);
    return killsAverage + ':' + deathsAverage + ':' + assistsAverage;
  }

  getWinRateFromGamesList(gameList) {
    let numberOfWins = 0;
    const numberOfGames = gameList.length;

    gameList.forEach((game) => {
      if (game.result === 'Win') { numberOfWins += 1; }
    });

    return numberOfWins / numberOfGames * 100;
  }

  getAverage(array) {
      let c = 0;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < array.length; i++) {
        c += Number(array[i]);
      }
      return c / array.length;
  }
}
