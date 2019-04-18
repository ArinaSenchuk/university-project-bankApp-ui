import {ReferenceData} from './ReferenceData';

export class Credit {

  creditType: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  numberOfContract: number;
  currencyType: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  dateOfCreditStart: number[];
  creditTerm: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  creditAmount: number;

  dateOfCreditEnd: number[];
  creditCharge: number;

}

