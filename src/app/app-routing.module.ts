import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './modules/registration/registration.component';
import {MainComponent} from './modules/main/main.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'main', component: MainComponent },
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
