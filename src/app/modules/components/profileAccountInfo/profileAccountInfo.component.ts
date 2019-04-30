import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ClientAccount} from '../../../models/ClientAccount';
import {HttpClient} from '@angular/common/http';
import {TokenService} from '../../../service/token.service';
import {Deposit} from '../../../models/Deposit';
import {CreditDto} from '../../../models/CreditDto';


@Component({
  selector: 'app-profile-account-info',
  templateUrl: './profileAccountInfo.component.html',
  styleUrls: ['./profileAccountInfo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileAccountInfoComponent implements OnInit {

  clientAccount: ClientAccount = new ClientAccount();
  deposits: Deposit[] = [];
  creditsDto: CreditDto[] = [];


  constructor(private http: HttpClient,
              private tokenService: TokenService) {}

  ngOnInit() {
    this.http.get<ClientAccount>(`http://localhost:8080/api/client-account/current?access_token=${this.tokenService.token}`).subscribe(success => {
      this.clientAccount = success;
    });
    this.http.get<Deposit[]>(`http://localhost:8080/api/deposits?access_token=${this.tokenService.token}`).subscribe(success => {
      this.deposits = success;
    });
    this.http.get<CreditDto[]>(`http://localhost:8080/api/credits?access_token=${this.tokenService.token}`).subscribe(success => {
      this.creditsDto = success;
    });
  }

  payDebt( creditId: number) {
    this.http.post<boolean>(`http://localhost:8080/api/credits/payment?access_token=${this.tokenService.token}&creditId=${creditId}`, null).subscribe(success => {
      if (success) {
        alert('Оплачено!');
        this.ngOnInit();
      } else {
        alert('Недостаточно средств!');
      }
    });
  }
}
