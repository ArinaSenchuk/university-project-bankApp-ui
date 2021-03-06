import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar.component';
import {AppRoutingModule} from '../../../app-routing.module';
import {MatButtonModule} from '@angular/material';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
