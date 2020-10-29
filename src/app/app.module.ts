import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { SigninComponent } from './Pages/signin/signin.component';
import { HomeComponent } from './Pages/home/home.component';
import { TeamsListComponent } from './Pages/Teams/teams-list/teams-list.component';
import { TeamCreationAndUpdateComponent } from './Pages/Teams/team-creation-and-update/team-creation-and-update.component';
import { TeamDetailsComponent } from './Pages/Teams/team-details/team-details.component';
import { TeamAlgorithmComponent } from './Pages/Teams/Modals/team-algorithm/team-algorithm.component';
import { TournamentsListComponent } from './Pages/Tournaments/tournaments-list/tournaments-list.component';
import { TournamentsMyListComponent } from './Pages/Tournaments/tournaments-my-list/tournaments-my-list.component';
import { TournamentCreateAndUpdateComponent } from './Pages/Tournaments/tournament-create-and-update/tournament-create-and-update.component';
import { TournamentDetailsComponent } from './Pages/Tournaments/tournament-details/tournament-details.component';
import { TournamentFollowComponent } from './Pages/Tournaments/tournament-follow/tournament-follow.component';
import { TournamentSummaryComponent } from './Pages/Tournaments/tournament-summary/tournament-summary.component';
import { MatchmakingsListComponent } from './Pages/Matchmakings/matchmakings-list/matchmakings-list.component';
import { TournamentTeamDetailsComponent } from './Pages/Tournaments/Modals/tournament-team-details/tournament-team-details.component';
import { MatchmakingsMyListComponent } from './Pages/Matchmakings/matchmakings-my-list/matchmakings-my-list.component';
import { MatchmakingDetailsComponent } from './Pages/Matchmakings/matchmaking-details/matchmaking-details.component';
import { MatchmakingCreationComponent } from './Pages/Matchmakings/matchmaking-creation/matchmaking-creation.component';
import { UserProfileComponent } from './Pages/Users/user-profile/user-profile.component';
import { UserProfileHistoryComponent } from './Pages/Users/user-profile-history/user-profile-history.component';
import { UserProfileReportComponent } from './Pages/Users/user-profile-report/user-profile-report.component';
import { UserProfileHonorComponent } from './Pages/Users/user-profile-honor/user-profile-honor.component';
import { UserProfileTeamsComponent } from './Pages/Users/user-profile-teams/user-profile-teams.component';
import { UserProfileHistoryDetailsComponent } from './Pages/Users/user-profile-history-details/user-profile-history-details.component';
import { UserProfileModificationComponent } from './Pages/Users/user-profile-modification/user-profile-modification.component';
import { NavigationComponent } from './Pages/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { HonorComponent } from './Pages/Users/Modals/honor/honor.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { ReportComponent } from './Pages/Users/Modals/report/report.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    SigninComponent,
    HomeComponent,
    TeamsListComponent,
    TeamCreationAndUpdateComponent,
    TeamDetailsComponent,
    TeamAlgorithmComponent,
    TournamentsListComponent,
    TournamentsMyListComponent,
    TournamentCreateAndUpdateComponent,
    TournamentDetailsComponent,
    TournamentFollowComponent,
    TournamentSummaryComponent,
    MatchmakingsListComponent,
    TournamentTeamDetailsComponent,
    MatchmakingsMyListComponent,
    MatchmakingDetailsComponent,
    MatchmakingCreationComponent,
    UserProfileComponent,
    UserProfileHistoryComponent,
    UserProfileReportComponent,
    UserProfileHonorComponent,
    UserProfileTeamsComponent,
    UserProfileHistoryDetailsComponent,
    UserProfileModificationComponent,
    NavigationComponent,
    HonorComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
