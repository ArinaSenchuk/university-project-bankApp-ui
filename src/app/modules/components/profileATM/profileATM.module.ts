import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProfileATMComponent} from './profileATM.component';
import {AppRoutingModule} from '../../../app-routing.module';
import {NavbarModule} from '../navbar/navbar.module';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    ProfileATMComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule

  ],
  providers: [],
  bootstrap: [ProfileATMComponent],
  exports: [ProfileATMComponent]
})
export class ProfileATMModule { }
