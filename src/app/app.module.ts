import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegistrationModule} from './modules/registration/registration.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MainModule} from './modules/main/main.module';
import {NavbarModule} from './modules/components/navbar/navbar.module';
import {LoginModule} from './modules/login/login.module';
import {ProfileModule} from './modules/profile/profile.module';
import {ProfileShowModule} from './modules/components/profileShow/profileShow.module';
import {ProfileEditModule} from './modules/components/profileEdit/profileEdit.module';
import {DepositComponent} from './modules/deposit/deposit.component';
import {DepositModule} from './modules/deposit/deposit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RegistrationModule,
    MainModule,
    NavbarModule,
    LoginModule,
    ProfileModule,
    ProfileShowModule,
    ProfileEditModule,
    DepositModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
