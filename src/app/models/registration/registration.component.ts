import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from './user';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit() {
    this.user.firstname = this.form.controls['firstname'].value;
    this.user.lastname = this.form.controls['lastname'].value;
    this.user.patronic = this.form.controls['patronic'].value;
    this.user.dateOfBd = this.form.controls['dateOfBd'].value;
    this.user.sex = this.form.controls['sex'].value;
    this.user.passportSeries = this.form.controls['passportSeries'].value;
    this.user.passportNumber = this.form.controls['passportNumber'].value;
    this.user.issuedBy = this.form.controls['issuedBy'].value;
    this.user.identificationNumber = this.form.controls['identificationNumber'].value;
    this.user.placeOfBirth = this.form.controls['placeOfBirth'].value;
    this.user.city = this.form.controls['city'].value;
    this.user.address = this.form.controls['address'].value;
    this.user.phoneNumber = this.form.controls['phoneNumber'].value;
    this.user.familyStatus = this.form.controls['familyStatus'].value;
    this.user.nationality = this.form.controls['nationality'].value;
    this.user.disability = this.form.controls['disability'].value;
    this.user.revenue = this.form.controls['revenue'].value;
    this.user.isRetiree = this.form.controls['isRetiree'].value;
    this.user.email = this.form.controls['email'].value;
    this.user.password = this.form.controls['password'].value;

  this.http.post<User>('http://localhost:8080/users/save', this.user).subscribe((user: User) => this.user = user);
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
    password: new FormControl(),
  });

  cities: Option[] = [
    {value: 'Город 1', viewValue: 'Город'},
    {value: 'Город-2', viewValue: 'Город'},
    {value: 'Город-3', viewValue: 'Город'},
    {value: 'Город-4', viewValue: 'Город'},
    {value: 'Город-5', viewValue: 'Город'}
  ];

  status: Option[] = [
    {value: '1', viewValue: 'Женат/Замужем'},
    {value: '0', viewValue: 'Не женат/Не замужем'}
  ];

  nationalities: Option[] = [
    {value: '0', viewValue: 'Белорус'},
    {value: '1', viewValue: 'Украинец'},
    {value: '2', viewValue: 'Поляк'},
    {value: '3', viewValue: 'Латыш'},
    {value: '3', viewValue: 'Литовец'}
  ];

  disabilities: Option[] = [
    {value: '0', viewValue: 'Отсутствует'},
    {value: '1', viewValue: '1 Группа'},
    {value: '2', viewValue: '2 Группа'},
    {value: '3', viewValue: '3 группа'}
  ];


}

export interface Option {
  value: string;
  viewValue: string;
}
