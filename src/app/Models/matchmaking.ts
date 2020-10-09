export class Matchmaking {
  id: number;
  creatorId: number;
  date: Date;
  team: {
    winRate: number;
    players: [{
      userId: number;
      userPseudo: string;
      status: string;
    }]
  };
}
