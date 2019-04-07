import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './modules/registration/registration.component';
import {MainComponent} from './modules/main/main.component';
import {LoginComponent} from './modules/login/login.component';
import {ProfileComponent} from './modules/profile/profile.component';
import {DepositComponent} from './modules/deposit/deposit.component';
import {ProfileAccountInfoComponent} from './modules/components/profileAccountInfo/profileAccountInfo.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profileAccountInfo', component: ProfileAccountInfoComponent },
  { path: 'deposit', component: DepositComponent },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
