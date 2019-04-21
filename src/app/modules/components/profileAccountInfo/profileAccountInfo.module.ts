import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProfileAccountInfoComponent} from './profileAccountInfo.component';
import {AppRoutingModule} from '../../../app-routing.module';
import {NavbarModule} from '../navbar/navbar.module';
import {MatTabsModule} from '@angular/material';



@NgModule({
  declarations: [
    ProfileAccountInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [ProfileAccountInfoComponent],
  exports: [ProfileAccountInfoComponent]
})
export class ProfileAccountInfoModule { }
