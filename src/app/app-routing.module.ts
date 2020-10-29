import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Pages/home/home.component';
import {LoginComponent} from './Pages/login/login.component';
import {SigninComponent} from './Pages/signin/signin.component';
import {UserProfileComponent} from './Pages/Users/user-profile/user-profile.component';
import {TeamsListComponent} from './Pages/Teams/teams-list/teams-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'connexion', component: LoginComponent},
  {path: 'inscription', component: SigninComponent},
  {path: 'profil', component: UserProfileComponent},
  {path: 'equipe', component: TeamsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
