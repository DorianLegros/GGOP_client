import {Ban} from './ban';

export class User {
  id: string;
  pseudo: string;
  email: string;
  password: string;
  role: string[];
  isBanned: boolean;
  riotServerId: string;
  riotPseudo: string;
  riotAccountId: string;
  isRiotValidated: string;
  bans: Ban[];
}
