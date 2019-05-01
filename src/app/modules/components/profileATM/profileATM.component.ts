import {Component, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-profile-account-info',
  templateUrl: './profileATM.component.html',
  styleUrls: ['./profileATM.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileATMComponent {

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private router: Router) {}


  onSubmit() {
    if (!(this.form.controls['amount'].value === 0)) {
      if (this.form.controls['operation'].value === 'put') {
        this.http.post(`http://localhost:8080/api/client-account/put?access_token=${this.tokenService.token}`, this.form.controls['amount'].value).subscribe(success => {
          this.router.navigate(['/profile']);
        });
      } else {
        this.http.post(`http://localhost:8080/api/client-account/get?access_token=${this.tokenService.token}`, this.form.controls['amount'].value).subscribe(success => {
          if (success) {
            this.router.navigate(['/profile']);
          } else {
            alert('Недостаточно средств на счете!');
          }

        });
      }
    }
  }

  form = new FormGroup({
    operation: new FormControl(),
    amount: new FormControl(),
  });

}
