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
import {DepositModule} from './modules/deposit/deposit.module';
import {ProfileAccountInfoModule} from './modules/components/profileAccountInfo/profileAccountInfo.module';
import {CreditModule} from './modules/credit/credit.module';
import {ProfileATMModule} from './modules/components/profileATM/profileATM.module';

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
    ProfileAccountInfoModule,
    DepositModule,
    CreditModule,
    ProfileATMModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
