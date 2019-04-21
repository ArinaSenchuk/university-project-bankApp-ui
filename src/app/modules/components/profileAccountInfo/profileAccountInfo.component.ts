import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ClientAccount} from '../../../models/ClientAccount';
import {HttpClient} from '@angular/common/http';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';
import {Deposit} from '../../../models/Deposit';



@Component({
  selector: 'app-profile-account-info',
  templateUrl: './profileAccountInfo.component.html',
  styleUrls: ['./profileAccountInfo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileAccountInfoComponent implements OnInit {

  clientAccount: ClientAccount = new ClientAccount();
  deposits: Deposit[] = [];


  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private router: Router) {}

  ngOnInit() {
    this.http.get<ClientAccount>(`http://localhost:8080/api/client-account/current?access_token=${this.tokenService.token}`).subscribe(success => {
      this.clientAccount = success;
    });
    this.http.get<Deposit[]>(`http://localhost:8080/api/deposits?access_token=${this.tokenService.token}`).subscribe(success =>{
      this.deposits = success;
    });
  }

}
