import {Component, Input, OnInit} from '@angular/core';
import {Profile} from '../../registration/profile';
import {HttpClient} from '@angular/common/http';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-profileshow',
  templateUrl: './profileShow.component.html',
  styleUrls: ['./profileShow.component.scss']
})
export class ProfileShowComponent {

  @Input() profile: Profile = new Profile();



}
