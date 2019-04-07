import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProfileAccountInfoComponent} from './profileAccountInfo.component';
import {AppRoutingModule} from '../../../app-routing.module';
import {NavbarModule} from '../navbar/navbar.module';



@NgModule({
  declarations: [
    ProfileAccountInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule

  ],
  providers: [],
  bootstrap: [ProfileAccountInfoComponent],
  exports: [ProfileAccountInfoComponent]
})
export class ProfileAccountInfoModule { }
