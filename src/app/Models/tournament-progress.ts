export class TournamentProgress {
  id: number;
  tournamentId: number;
  status: string;
  winnerId: number;
  rounds: [{
    number: number;
    status: string;
    winnersIds: number[];
    versus: [{
      teamOneId: number;
      teamTwoId: number;
      winner: number; // 1 or 2
    }];
  }];
}
