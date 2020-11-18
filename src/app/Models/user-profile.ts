export class UserProfile {
  id: number;
  userId: number;
  mainChampionId: number;
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
  gameHistory: [{
    date: Date;
    result: string;
    teams: [{
      win: boolean;
      players: [{
        userId: number; // if that user does exist in the application, riotAccountId if doesn't
        userPseudo: string; // if that user does exist in the application, summonerName if doesn't
        championId: number;
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
