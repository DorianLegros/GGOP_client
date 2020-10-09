import {Ban} from './ban';

export class User {
  id: number;
  pseudo: string;
  email: string;
  password: string;
  role: string[];
  riotServerId: number;
  riotPseudo: string;
  riotAccountId: string;
  isRiotValidated: string;
  bans: Ban[];
}
