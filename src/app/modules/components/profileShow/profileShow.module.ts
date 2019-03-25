import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProfileShowComponent} from './profileShow.component';
import {AppRoutingModule} from '../../../app-routing.module';



@NgModule({
  declarations: [
    ProfileShowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [ProfileShowComponent],
  exports: [ProfileShowComponent]
})
export class ProfileShowModule { }
