import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Pages/home/home.component';
import {LoginComponent} from './Pages/login/login.component';
import {SigninComponent} from './Pages/signin/signin.component';
import {UserProfileComponent} from './Pages/Users/user-profile/user-profile.component';
import {TeamsListComponent} from './Pages/Teams/teams-list/teams-list.component';
import {TournamentsListComponent} from './Pages/Tournaments/tournaments-list/tournaments-list.component';
import {MatchmakingsListComponent} from './Pages/Matchmakings/matchmakings-list/matchmakings-list.component';
import {SettingsComponent} from './Pages/settings/settings.component';
import {TournamentDetailsComponent} from './Pages/Tournaments/tournament-details/tournament-details.component';
import {TournamentSummaryComponent} from './Pages/Tournaments/tournament-summary/tournament-summary.component';
import {UserProfileHistoryDetailsComponent} from './Pages/Users/user-profile-history-details/user-profile-history-details.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'connexion', component: LoginComponent},
  {path: 'inscription', component: SigninComponent},
  {path: 'profil', component: UserProfileComponent},
  {path: 'equipe', component: TeamsListComponent},
  {path: 'tournois', component: TournamentsListComponent},
  {path: 'matchmaking', component: MatchmakingsListComponent},
  {path: 'reglage', component: SettingsComponent},
  {path: 'tournois-details', component: TournamentDetailsComponent},
  {path: 'tournois-resume', component: TournamentSummaryComponent},
  {path: 'historique-resume', component: UserProfileHistoryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
