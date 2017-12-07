import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Transaction} from '../Model/Transaction'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class AccountHistoryService {
  constructor(private http: Http) { }  
  getTransactionsByReference(urlTransaction : string){
  return this.http.get(urlTransaction);
}
}
