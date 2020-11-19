import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfileService} from './user-profile.service';
import {UserProfile} from '../Models/user-profile';
import {User} from '../Models/user';

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
    // const algoPlayerRank = user.rank;
    const algoPlayerReputationRatio = user.reputation.ratio;

    // get player principal play hour from user games history
    const algoPlayerPlayHour = this.getPlayerPrincipalPlayHourFromGameHistory(user);

    // get player games where it play at its main lane
    const algoPlayerPrincipalGamesList = this.getPlayerPrincipalGamesFromGameHistory(user, algoPlayerMainLane);

    // with its main games, find its KDA rate and win rate
    const algoPlayerKDAAverage = this.getKDARateFromGameList(user.userId, algoPlayerPrincipalGamesList);
    const algoPlayerWinRate = this.getWinRateFromGamesList(algoPlayerPrincipalGamesList);


    // get the list of all users from the website
    const targetsList = await this.userProfileService.getAllUsersProfile();

    // create a list from the first with scores properties
    const targetsListWithScore = [];
    targetsList.forEach((target) => {
      if (target.userId !== user.userId) {
        const objectToPush = {
          target, globalScore: 0, playLevelScore: 0, fairPlayScore: 0, compatibilityScore: 0, notCompatible: false
        };
        targetsListWithScore.push(objectToPush);
      }
    });

    // for each user in the list
    targetsListWithScore.forEach((target) => {
      const targetInfos = target.target;
      // get its main champion from its profile if not null
      let algoTargetMainChampion;
      algoTargetMainChampion = targetInfos.mainChampion !== null ? targetInfos.mainChampion : null;

      // get its rank and reputation ratio
      // const algoTargetRank = targetInfos.rank;
      const algoTargetReputationRatio = targetInfos.reputation.ratio;

      // for each game in its history
      // if its main champion is null, get the champion played to get the most played champion
      algoTargetMainChampion = algoTargetMainChampion !== null ?
        algoTargetMainChampion : this.getPlayerMainChampionFromGameHistory(targetInfos);

      // get the time when the game was played, to get its principal play time period
      const algoTargetPlayHour = this.getPlayerPrincipalPlayHourFromGameHistory(targetInfos);

      // find if the game is a classic game (to avoid ARAM players) and add it to "algoClassicGamesList"
      const algoTargetPrincipalGamesList = this.getPlayerPrincipalGamesFromGameHistory(targetInfos, '', 'target');

      // if the classic games list is empty, its score is 0
      if (algoTargetPrincipalGamesList.length < 1) {
        target.notCompatible = true;
      }

      // get KDA rate and winrate
      const algoTargetKDAAverage = this.getKDARateFromGameList(targetInfos.userId, algoTargetPrincipalGamesList);
      const algoTargetWinRate = this.getWinRateFromGamesList(algoTargetPrincipalGamesList);


      // make comparisons between player infos and targeted user to define a score for each score
      /* comparison for play level score */
      const algoPlayerKDAAverages = algoPlayerKDAAverage.split(':');
      const algoTargetKDAAverages = algoTargetKDAAverage.split(':');
      // if for the rank

      // @ts-ignore
      const killsAverageDifference = Math.abs(algoTargetKDAAverages[0] - algoPlayerKDAAverages[0]);
      // @ts-ignore
      const deathsAverageDifference = Math.abs(algoPlayerKDAAverages[1] - algoTargetKDAAverages[1]);

      if (killsAverageDifference < 5 && deathsAverageDifference < 5) {
        target.playLevelScore += 2;
      } else if ((killsAverageDifference > 8 && killsAverageDifference < 10) &&
        (deathsAverageDifference > 8 && deathsAverageDifference < 10)) {
        target.playLevelScore += 1;
      }

      const winRateDifference = Math.abs(algoTargetWinRate - algoPlayerWinRate);
      if (winRateDifference < 10) {
        target.playLevelScore += 3;
      } else if (winRateDifference > 10 && winRateDifference < 20) {
        target.playLevelScore += 2;
      } else if (winRateDifference > 20 && winRateDifference < 30) {
        target.playLevelScore += 1;
      }

      /* comparison for fair play score */
      const reputationRatioDifference = Math.abs(algoPlayerReputationRatio - algoTargetReputationRatio);
      if (reputationRatioDifference < 0.1) {
        target.fairPlayScore += 5;
      } else if (reputationRatioDifference > 0.1 && reputationRatioDifference < 0.2) {
        target.fairPlayScore += 4;
      } else if (reputationRatioDifference > 0.2 && reputationRatioDifference < 0.3) {
        target.fairPlayScore += 3;
      } else if (reputationRatioDifference > 0.3 && reputationRatioDifference < 0.4) {
        target.fairPlayScore += 2;
      } else if (reputationRatioDifference > 0.4 && reputationRatioDifference < 0.5) {
        target.fairPlayScore += 1;
      }

      /* comparison for compatibility score */
      if (algoPlayerMainChampion !== algoTargetMainChampion) { target.compatibilityScore += 1; }
      if (algoPlayerPlayHour === algoTargetPlayHour) {
        target.compatibilityScore += 3;
      } else if (Math.abs(algoPlayerPlayHour - algoTargetPlayHour) <= 2) {
        target.compatibilityScore += 1;
      }
      // if for the lane

      // define global score
      const scoresArray = [];
      if (algoPlayLevelScoreActive) {
        scoresArray.push(target.playLevelScore);
      }
      if (algoFairPlayScoreActive) {
        scoresArray.push(target.fairPlayScore);
      }
      if (algoCompatibilityScoreActive) {
        scoresArray.push(target.compatibilityScore);
      }
      target.globalScore = this.getAverage(scoresArray);
    });

    // if global score is greater or equal to 3, targeted user is placed in the compatible players list
    const compatibleTargetsList = [];
    targetsListWithScore.forEach((target) => {
      console.log(target.globalScore);
      if (target.globalScore <= 3) {
        compatibleTargetsList.push(target.target);
      }
    });

    // return list of compatible players
    return compatibleTargetsList;
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
      // tslint:disable-next-line:no-unused-expression
      const playerNumberPlayedInHour = playerPlayHoursArray.filter((value => { value === hour; })).length;
      if (playerNumberPlayedInHour > playerNumberPlayedInPrincipalHour) {
        playerNumberPlayedInPrincipalHour = playerNumberPlayedInHour;
        playerPlayHour = hour;
      }
    });

    return playerPlayHour;
  }

  getPlayerPrincipalGamesFromGameHistory(user: UserProfile, lane: string, forWho = '') {
    const playerPrincipalGames = [];

    user.gameHistory.forEach((game) => {
      if (game.gameMode === 'CLASSIC') {
        if (forWho === 'target') {
          playerPrincipalGames.push(game);
        } else {
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
      }
    });

    return playerPrincipalGames;
  }

  getPlayerMainChampionFromGameHistory(user: UserProfile) {
    let playerMainChampion;
    const playerChampionsArray = [];
    const playerUniqueChampionsArray = [];

    user.gameHistory.forEach((game) => {
      let userTeam;
      game.teams.forEach((team) => {
        if (team.win === game.result) { userTeam = team; }
      });
      let userGameStats;
      userTeam.forEach((player) => {
        if (player.userId === user.userId) { userGameStats = player; }
      });

      const champion = userGameStats.championId;
      playerChampionsArray.push(champion);
      if (!playerChampionsArray.includes(champion)) { playerUniqueChampionsArray.push(champion); }

    });

    // get most played champion
    let playerNumberPlayedWithMainChampion = 0;
    playerUniqueChampionsArray.forEach((champion) => {
      // tslint:disable-next-line:no-unused-expression
      const playerNumberPlayedWithChampion = playerChampionsArray.filter((value => { value === champion; })).length;
      if (playerNumberPlayedWithChampion > playerNumberPlayedWithMainChampion) {
        playerNumberPlayedWithMainChampion = playerNumberPlayedWithChampion;
        playerMainChampion = champion;
      }
    });
    return playerMainChampion;
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
