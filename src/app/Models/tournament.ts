export class Tournament {
  id: number;
  creatorId: number;
  name: string;
  description: string;
  isFull: boolean;
  date: Date;
  teamNumber: number;
  teams: [{
    teamId: number;
    status: string;
    players: [{
      userId: number;
      userPseudo: string;
    }]
  }];
}
