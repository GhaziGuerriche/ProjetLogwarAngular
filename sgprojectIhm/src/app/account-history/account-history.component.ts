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
 transactions : Transaction[];
 accountHistoryService : AccountHistoryService;
  constructor(accountHistoryService : AccountHistoryService) { 
    this.accountHistoryService=accountHistoryService;
  }
  getTransactionsByAccount(){
    this.accountHistoryService.getTransactionsByReference('./api/transaction').subscribe(
      (res) => this.transactions = res.json(),
      error => console.error('Error: ' + error),
      () => console.log('Completed!')

    );
  }
  ngOnInit() {
    this.getTransactionsByAccount();
  }

}
