import {ReferenceData} from './ReferenceData';

export class Credit {

  creditType: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  numberOfContract: number;
  currencyType: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  dateOfCreditStart: Date;
  creditTerm: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  creditAmount: number;

  dateOfCreditEnd: Date;

}

