import { CdkNoDataRow } from '@angular/cdk/table';
import { Injectable } from '@angular/core';
import * as data from '../../scripts/data.json';

export interface Candidate {
  S_No: number;
  First_Name: string;
  Last_Name: string;
  Address: string;
  City: string;
  Zip_Code: number;
  Contact_No: number;
  Email_Address: string;
  Qualifications: string;
  HandsOn_Experience: string;
  Hobbies: string;
  Remarks: string;
}

@Injectable({
  providedIn: 'root'
})

export class GetJsonService {

  constructor() { }

  getJsonData(): Candidate[]{
    var toRet: Candidate[] = Object.values(data);
    return toRet;
  }
}
