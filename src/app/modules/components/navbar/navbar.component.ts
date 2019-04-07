import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TokenService} from '../../../service/token.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private tokenService: TokenService,
              private cdr: ChangeDetectorRef) {
  }

   flag() {

    return this.tokenService.token !== '';
    this.cdr.detectChanges();
  }

  exit() {
     this.tokenService.token = '';
  }
}

