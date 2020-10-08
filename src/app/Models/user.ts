import {Ban} from './ban';

export class User {
  id: number;
  pseudo: string;
  email: string;
  password: string;
  role: string[];
  isBanned: boolean;
  riotServerId: number;
  riotPseudo: string;
  riotAccountId: string;
  isRiotValidated: string;
  bans: Ban[];
}
