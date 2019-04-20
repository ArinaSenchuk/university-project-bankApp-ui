import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RegistrationComponent } from './registration.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule, MatSelectModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NavbarModule} from '../components/navbar/navbar.module';
import {AppRoutingModule} from '../../app-routing.module';


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavbarModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [RegistrationComponent],
  exports: [RegistrationComponent]
})
export class RegistrationModule { }
