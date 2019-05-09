import {ReferenceData} from './ReferenceData';

export class InterestProgram {

  id: number;
  program: ReferenceData = {id: 0, label: '', code: '', definition: ''};
  term: ReferenceData = {id: 0, label: '', code: '', definition: ''};

  interest: string;
}

