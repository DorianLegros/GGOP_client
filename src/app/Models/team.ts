export class Team {
  id: number;
  creatorId: number;
  name: string;
  winRate: number;
  isComplete: boolean;
  players: [{
    userId: number;
    userPseudo: string;
    status: string;
  }];
}
