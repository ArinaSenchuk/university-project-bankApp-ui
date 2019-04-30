import {Component, OnInit} from '@angular/core';
import {Profile} from '../../models/Profile';
import {HttpClient} from '@angular/common/http';
import {TokenService} from '../../service/token.service';
import {Router} from '@angular/router';
import {error} from '@angular/compiler/src/util';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: Profile = new Profile();
  flag = 0;
  deleteValue: boolean;

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit() {
    this.http.get<Profile>(`http://localhost:8080/api/profiles/current?access_token=${this.tokenService.token}`).subscribe(success => {
      this.profile = success;
    });
  }

  delete() {
    this.http.get<boolean>(`http://localhost:8080/api/profiles/delete?access_token=${this.tokenService.token}`).subscribe(success => {
      this.deleteValue = success;
      if(success) {
        this.tokenService.token = '';
        this.router.navigate(['/main']);
      } else {
        alert('Аккаунт не может быть удален! ');
      }
    });
  }

  edit() {
    this.flag = 1;
  }

  onProfileChange() {
    this.flag = 0;
  }
}




