export class UserProfile {
  id: number;
  userId: number;
  mainChampion: number;
  mainRole: string;
  rank: string;
  reputation: {
    ratio: number;
    honors: [{
      type: number;
      number: number;
    }];
    reports: [{
      type: number;
      number: number;
    }]
  };
  // tslint:disable-next-line:variable-name
  game_history: [{
    date: Date;
    result: string;
    gameMode: string;
    teams: [{
      win: string;
      players: [{
        userId: number; // if that user does exist in the application, riotAccountId if doesn't
        userPseudo: string; // if that user does exist in the application, summonerName if doesn't
        championId: number;
        lane: string;
        kills: number;
        deaths: number;
        assists: number;
        items: [];
        pPerk: string;
        sPerk: string;
        summonerSpells: [];
      }]
    }]
  }];
}
