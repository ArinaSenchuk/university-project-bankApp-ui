import {ReferenceData} from './ReferenceData';

export class Deposit {

  depositType: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  numberOfContract: number;
  currencyType: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  dateOfDepositStart: number[];
  depositTerm: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  depositAmount: number;

  dateOfDepositEnd: number[];
  depositCharge: number;

}

