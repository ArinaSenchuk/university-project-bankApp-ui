import {ReferenceData} from './ReferenceData';

export class Profile {
  lastname: string;
  firstname: string;
  patronic: string;
  dateOfBd: number[];
  sex: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  passportSeries: string;
  passportNumber: string;
  issuedBy: string;
  identificationNumber: string;
  placeOfBirth: string;
  city: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  address: string;
  phoneNumber: string;
  familyStatus: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  nationality: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  disability: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  revenue: string;
  isRetiree: string;
}
