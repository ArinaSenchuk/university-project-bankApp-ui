import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import {Options} from '../../../models/Options';
import {Profile} from '../../registration/profile';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';
import {MatOption} from '@angular/material';



@Component({
  selector: 'app-profileedit',
  templateUrl: './profileEdit.component.html',
  styleUrls: ['./profileEdit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private router: Router,
              private cdr: ChangeDetectorRef) {
  }

  options: Options = {sex: [], city: [], nationality: [], disability: [], status: []};

  @Input() profile: Profile = new Profile();
  @Output() profileEdited = new EventEmitter();


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
  });

  ngOnInit() {
    this.http.get<Options>('http://localhost:8080/reference_data/options').subscribe(success => {
      this.options = success;
    });

    this.buildForm();
  }



  buildForm() {

    this.form.controls['lastname'].setValue(this.profile.lastname);
    this.form.controls['firstname'].setValue(this.profile.firstname);
    this.form.controls['patronic'].setValue(this.profile.patronic);
    this.form.controls['dateOfBd'].setValue(this.profile.dateOfBd);
    this.form.controls['sex'].setValue(this.profile.sex);
    this.form.controls['passportSeries'].setValue(this.profile.passportSeries);
    this.form.controls['passportNumber'].setValue(this.profile.passportNumber);
    this.form.controls['issuedBy'].setValue(this.profile.issuedBy);
    this.form.controls['identificationNumber'].setValue(this.profile.identificationNumber);
    this.form.controls['placeOfBirth'].setValue(this.profile.placeOfBirth);
    this.form.controls['city'].setValue(this.profile.city);
    this.form.controls['address'].setValue(this.profile.address);
    this.form.controls['phoneNumber'].setValue(this.profile.phoneNumber);
    this.form.controls['familyStatus'].setValue(this.profile.familyStatus);
    this.form.controls['nationality'].setValue(this.profile.nationality);
    this.form.controls['disability'].setValue(this.profile.disability);
    this.form.controls['revenue'].setValue(this.profile.revenue);
  }

  onEdit() {
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


    this.http.post(`http://localhost:8080/api/profiles/save?access_token=${this.tokenService.token}`, this.profile).subscribe(success => {
      this.cdr.detectChanges();
      this.profileEdited.emit();
  });

}

}
