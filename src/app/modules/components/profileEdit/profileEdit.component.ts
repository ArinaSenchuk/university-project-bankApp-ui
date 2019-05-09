import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import {ProfileOptions} from '../../../models/Options';
import {Profile} from '../../../models/Profile';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';
import {ReferenceData} from '../../../models/ReferenceData';


@Component({
  selector: 'app-profileedit',
  templateUrl: './profileEdit.component.html',
  styleUrls: ['./profileEdit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileEditComponent implements OnInit {

  currentDate = new Date(Date.now());
  minDate = new Date(1920, 0, 1);
  maxDate = new Date(this.currentDate.getFullYear() - 18, this.currentDate.getMonth(), this.currentDate.getDate());

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private router: Router,
              private cdr: ChangeDetectorRef) {
  }

  profileOptions: ProfileOptions = {sex: [], city: [], nationality: [], disability: [], status: []};

  @Input() profile: Profile = new Profile();
  @Output() profileEdited = new EventEmitter();

  previous: ReferenceData = new ReferenceData();
  selectedCity: ReferenceData = this.previous;
  selectedFamilyStatus: ReferenceData = this.previous;
  selectedNationality: ReferenceData = this.previous;
  selectedDisability: ReferenceData = this.previous;

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
    this.http.get<ProfileOptions>('http://localhost:8080/reference_data/options/profile').subscribe(success => {
      this.profileOptions = success;
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
    this.form.controls['city'].setValue(this.profile.city.label);
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
    this.profile.city = this.selectedCity === this.previous ? this.profile.city : this.selectedCity;
    this.profile.address = this.form.controls['address'].value;
    this.profile.phoneNumber = this.form.controls['phoneNumber'].value;
    this.profile.familyStatus = this.selectedFamilyStatus === this.previous ? this.profile.familyStatus : this.selectedFamilyStatus;
    this.profile.nationality = this.selectedNationality === this.previous ? this.profile.nationality : this.selectedNationality;
    this.profile.disability = this.selectedDisability === this.previous ? this.profile.disability : this.selectedDisability;

    if (this.form.controls['revenue'].value === ' ') {
      this.profile.revenue = null;
    } else {
      this.profile.revenue = this.form.controls['revenue'].value;
    }
    this.profile.isRetiree = this.form.controls['isRetiree'].value;


    this.http.put(`http://localhost:8080/api/profiles?access_token=${this.tokenService.token}`, this.profile).subscribe(success => {
      this.cdr.detectChanges();
      this.profileEdited.emit();
    }, error => alert(error.error.message));

  }

  getCities() {
    return this.profileOptions.city.filter(city => city.code !== this.profile.city.code);
  }

  getFamilyStatus() {
    return this.profileOptions.status.filter(status => status.code !== this.profile.familyStatus.code);
  }

  getNationality() {
    return this.profileOptions.nationality.filter( nationality => nationality.code !== this.profile.nationality.code);
  }

  getDisability() {
    return this.profileOptions.disability.filter( disability => disability.code !== this.profile.disability.code);
  }

}
