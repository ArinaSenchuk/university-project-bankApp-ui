import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {TokenService} from '../../service/token.service';
import {Router} from '@angular/router';
import {AuthToken} from '../../models/AuthToken';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  hide = true;

  login: FormControl = new FormControl('', Validators.required);
  password: FormControl = new FormControl('', Validators.required);

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private router: Router) {
  }

  onSubmit() {

      const body = `username=${encodeURIComponent(this.login.value)}`
        + `&password=${encodeURIComponent(this.password.value)}`
        + `&grant_type=${encodeURIComponent('password')}`;

      this.http.post<AuthToken>('http://localhost:8080/oauth/token', body,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa('devglan-client:devglan-secret')
          }
        }).subscribe(
        success => {
          this.tokenService.token = success.access_token;
          this.router.navigate([ '/profile' ]);
        }
      );
  }

}

