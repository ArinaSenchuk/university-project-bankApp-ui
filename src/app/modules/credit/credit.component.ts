import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Deposit} from '../../models/Deposit';
import {CreditOptions, DepositOptions} from '../../models/Options';
import {TokenService} from '../../service/token.service';
import {Credit} from '../../models/Credit';


@Component({
  selector: 'app-deposit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreditComponent implements OnInit {

  minDate = new Date(Date.now());
  maxDate = new Date(this.minDate.getFullYear() + 1 , this.minDate.getMonth(), this.minDate.getDate());

  credit: Credit = new Credit();
  creditOptions: CreditOptions = new CreditOptions();

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private router: Router) {}

  ngOnInit() {
    this.http.get<CreditOptions>('http://localhost:8080/reference_data/options/credit').subscribe(success => {
      this.creditOptions = success;
    });
  }

  onSubmit() {
    this.credit.creditType = this.creditForm.controls['creditType'].value;
    this.credit.numberOfContract = this.creditForm.controls['numberOfContract'].value;
    this.credit.currencyType = this.creditForm.controls['currencyType'].value;
    this.credit.dateOfCreditStart = this.creditForm.controls['dateOfCreditStart'].value;
    this.credit.creditTerm = this.creditForm.controls['creditTerm'].value;
    this.credit.creditAmount = this.creditForm.controls['creditAmount'].value;

    this.http.post(`http://localhost:8080/api/credits/save?access_token=${this.tokenService.token}`, this.credit).subscribe(success => {
      this.router.navigate(['/profile']);
      });
  }

  creditForm = new FormGroup( {
    creditType: new FormControl(),
    numberOfContract: new FormControl(),
    currencyType: new FormControl(),
    dateOfCreditStart: new FormControl(),
    creditTerm: new FormControl(),
    creditAmount: new FormControl()
  });


}

