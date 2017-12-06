import { Component, OnInit } from '@angular/core';
import {AccountHistoryService} from '../Service/account-history.service'
import {Transaction } from '../Model/Transaction'
@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.css'],
  providers : [AccountHistoryService]
})
export class AccountHistoryComponent implements OnInit {
 transactions = Array<Transaction>();
 accountHistoryService : AccountHistoryService;
  constructor(accountHistoryService : AccountHistoryService) { 
    this.accountHistoryService=accountHistoryService;
  }
  getTransactionsByAccount(){
    this.accountHistoryService.getTransactionsByReference('http://localhost:8084/api/account/6535615/transactions').subscribe(
      res => this.transactions = res,
      error => console.error('Error: ' + error),
      () => console.log('Completed!')

    );
  }
  ngOnInit() {
    this.getTransactionsByAccount();
  }

}
