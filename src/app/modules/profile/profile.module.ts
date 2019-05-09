import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProfileComponent} from './profile.component';
import {AppRoutingModule} from '../../app-routing.module';
import {NavbarModule} from '../components/navbar/navbar.module';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import {ProfileShowModule} from '../components/profileShow/profileShow.module';
import {ProfileEditModule} from '../components/profileEdit/profileEdit.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    ProfileShowModule,
    ProfileEditModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [ProfileComponent],
  exports: [ProfileComponent]
})
export class ProfileModule {}

