import {Component, Input, OnInit} from '@angular/core';
import {ClientAccount} from '../../../models/ClientAccount';
import {HttpClient} from '@angular/common/http';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-profile-account-info',
  templateUrl: './profileAccountInfo.component.html',
  styleUrls: ['./profileAccountInfo.component.scss']
})
export class ProfileAccountInfoComponent implements OnInit {

  clientAccount: ClientAccount = new ClientAccount();


  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private router: Router) {}

  ngOnInit() {
    this.http.get<ClientAccount>(`http://localhost:8080/api/client-account/current?access_token=${this.tokenService.token}`).subscribe(success => {
      this.clientAccount = success;
    });
  }

}
