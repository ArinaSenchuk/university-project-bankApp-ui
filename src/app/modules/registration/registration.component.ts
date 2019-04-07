import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../../models/User';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../../models/Profile';
import {Router} from '@angular/router';
import {ProfileOptions} from '../../models/Options';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();

  profile: Profile = new Profile();
  profileOptions: ProfileOptions = new ProfileOptions();


  constructor(private http: HttpClient,
              private router: Router) {}

  ngOnInit() {

    this.http.get<ProfileOptions>('http://localhost:8080/reference_data/options/profile').subscribe(success => {
      this.profileOptions = success;
    });
  }

  onSubmit() {

    this.profile.firstname = this.form.controls['firstname'].value;
    this.profile.lastname = this.form.controls['lastname'].value;
    this.profile.patronic = this.form.controls['patronic'].value;
    this.profile.dateOfBd = this.form.controls['dateOfBd'].value;
    this.profile.sex = this.form.controls['sex'].value;
    this.profile.passportSeries = this.form.controls['passportSeries'].value;
    this.profile.passportNumber = this.form.controls['passportNumber'].value;
    this.profile.issuedBy = this.form.controls['issuedBy'].value;
    this.profile.identificationNumber = this.form.controls['identificationNumber'].value;
    this.profile.placeOfBirth = this.form.controls['placeOfBirth'].value;
    this.profile.city = this.form.controls['city'].value;
    this.profile.address = this.form.controls['address'].value;
    this.profile.phoneNumber = this.form.controls['phoneNumber'].value;
    this.profile.familyStatus = this.form.controls['familyStatus'].value;
    this.profile.nationality = this.form.controls['nationality'].value;
    this.profile.disability = this.form.controls['disability'].value;

    if (this.form.controls['revenue'].value === ' ') {
      this.profile.revenue = null;
    } else {
      this.profile.revenue = this.form.controls['revenue'].value;
    }
    this.profile.isRetiree = this.form.controls['isRetiree'].value;

    this.user.email = this.form.controls['email'].value;
    this.user.login = this.form.controls['login'].value;
    this.user.password = this.form.controls['password'].value;

    const body = { profile: this.profile, user: this.user };

    this.http.post('http://localhost:8080/registration/save', body).subscribe(success => {
      this.router.navigate(['/login']);
    }, error => alert(error.error.message));
  }

  form = new FormGroup({
    lastname: new FormControl(),
    firstname: new FormControl(),
    patronic: new FormControl(),
    dateOfBd: new FormControl(),
    sex: new FormControl(),
    passportSeries: new FormControl(),
    passportNumber: new FormControl(),
    issuedBy: new FormControl(),
    identificationNumber: new FormControl(),
    placeOfBirth: new FormControl(),
    city: new FormControl(),
    address: new FormControl(),
    phoneNumber: new FormControl(),
    familyStatus: new FormControl(),
    nationality: new FormControl(),
    disability: new FormControl(),
    revenue: new FormControl(),
    isRetiree: new FormControl(),

    email: new FormControl(),
    login: new FormControl(),
    password: new FormControl(),
  });


}
