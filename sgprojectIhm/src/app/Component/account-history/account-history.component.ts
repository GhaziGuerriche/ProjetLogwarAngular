import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../Model/Account'
import { AccountHistoryService } from '../../Service/account-history.service'
import { Transaction } from '../../Model/Transaction'
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.css'],
  providers: [AccountHistoryService]
})
export class AccountHistoryComponent implements OnInit {
  account: Account;
  transactions: Transaction[];
  private sub: any;
  accountHistoryService: AccountHistoryService;
  constructor(private route: ActivatedRoute, accountHistoryService: AccountHistoryService) {
    this.accountHistoryService = accountHistoryService;
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.account.accountNumber = +params['id']; // (+) converts string 'id' to a number
      this.getAccount(this.account.accountNumber);
    });

    if (this.account !== undefined)
      this.getTransactionsByAccount();
  }
  getTransactionsByAccount() {
    this.accountHistoryService.getTransactionsByReference('./api/account/' + this.account.accountNumber).subscribe(
      (res) => this.transactions = res.json(),
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
    );
  }
  initDatatable() {
  }
  getAccount(accountNumber) {
    this.accountHistoryService.getAccount(accountNumber).subscribe(
      (res) => this.account = res.json(),
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
    );
  }
}
