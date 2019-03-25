import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProfileEditComponent} from './profileEdit.component';
import {AppRoutingModule} from '../../../app-routing.module';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ProfileEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [ProfileEditComponent],
  exports: [ProfileEditComponent]
})
export class ProfileEditModule { }
