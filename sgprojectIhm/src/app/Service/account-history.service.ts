import { Injectable } from '@angular/core';
import { Http,HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AccountHistoryService {
  constructor(private http: Http) { }  
  getTransactionsByReference(urlTransaction : string){
  return this.http.get(urlTransaction).map(
    response =>  response.json());
}
}
