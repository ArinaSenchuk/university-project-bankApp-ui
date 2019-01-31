import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

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

    onSubmit() {
      console.log(this.form.value);
    }

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
