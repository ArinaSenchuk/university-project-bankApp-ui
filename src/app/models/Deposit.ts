import {ReferenceData} from './ReferenceData';

export class Deposit {

  depositType: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  numberOfContract: number;
  currencyType: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  dateOfDepositStart: Date;
  depositTerm: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  depositAmount: number;

  dateOfDepositEnd: Date;
}

