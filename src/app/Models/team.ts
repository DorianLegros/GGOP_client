export class Team {
  id: number;
  creatorId: number;
  name: string;
  winRate: number;
  isComplete: boolean;
  players: [{
    user_id: number;
    user_pseudo: string;
    status: string;
  }];
}
