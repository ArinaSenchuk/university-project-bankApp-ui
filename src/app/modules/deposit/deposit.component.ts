import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Deposit} from '../../models/Deposit';
import {DepositOptions} from '../../models/Options';
import {TokenService} from '../../service/token.service';


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {

  deposit: Deposit = new Deposit();
  depositOptions: DepositOptions = new DepositOptions();

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private router: Router) {}

  ngOnInit() {
    this.http.get<DepositOptions>('http://localhost:8080/reference_data/options/deposit').subscribe(success => {
      this.depositOptions = success;
    });
  }

  onSubmit() {
    this.deposit.depositType = this.depositForm.controls['depositType'].value;
    this.deposit.numberOfContract = this.depositForm.controls['numberOfContract'].value;
    this.deposit.currencyType = this.depositForm.controls['currencyType'].value;
    this.deposit.dateOfDepositStart = this.depositForm.controls['dateOfDepositStart'].value;
    this.deposit.depositTerm = this.depositForm.controls['depositTerm'].value;
    this.deposit.depositAmount = this.depositForm.controls['depositAmount'].value;

    this.http.post(`http://localhost:8080/api/deposits/save?access_token=${this.tokenService.token}`, this.deposit).subscribe(success => {
      this.router.navigate(['/profile']);
      });
  }

  depositForm = new FormGroup( {
    depositType: new FormControl(),
    numberOfContract: new FormControl(),
    currencyType: new FormControl(),
    dateOfDepositStart: new FormControl(),
    depositTerm: new FormControl(),
    depositAmount: new FormControl()
  });


}

