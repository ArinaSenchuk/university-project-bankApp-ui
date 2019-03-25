import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainComponent} from './main.component';
import {AppRoutingModule} from '../../app-routing.module';
import {NavbarModule} from '../components/navbar/navbar.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule

  ],
  providers: [],
  bootstrap: [MainComponent],
  exports: [MainComponent]
})
export class MainModule { }
