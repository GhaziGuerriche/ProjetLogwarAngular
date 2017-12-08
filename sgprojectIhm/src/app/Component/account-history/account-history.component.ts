import { Component, OnInit, Input } from '@angular/core';
import {Account} from '../../Model/Account'
import { AccountHistoryService } from '../../Service/account-history.service'
import { Transaction } from '../../Model/Transaction'
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.css'],
  providers: [AccountHistoryService]
})
export class AccountHistoryComponent implements OnInit {
  @Input() account: Account;
  transactions: Transaction[];
  accountHistoryService: AccountHistoryService;
  constructor(accountHistoryService: AccountHistoryService) {
    this.accountHistoryService = accountHistoryService;
  }
  ngOnInit() {
    if(this.account !== undefined)
    this.getTransactionsByAccount();
  }
  getTransactionsByAccount() {
    this.accountHistoryService.getTransactionsByReference('./api/account/'+this.account.accountNumber).subscribe(
      (res) => this.transactions = res.json(),
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
    );
  }
  initDatatable() {
  }

}
