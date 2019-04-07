import {ReferenceData} from './ReferenceData';

export class ProfileOptions {
  sex: ReferenceData[];
  city: ReferenceData[];
  status: ReferenceData[];
  nationality: ReferenceData[];
  disability: ReferenceData[];
}

export class DepositOptions {
  currencyType: ReferenceData[];
  depositTerm: ReferenceData[];
  depositType: ReferenceData[];

}
