import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../Model/Account'
import { Title } from '@angular/platform-browser';
import { AccountService } from '../../Service/account.service'
import { Transaction } from '../../Model/Transaction'
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
declare var $;
@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.css'],
  providers: [AccountService]
})
export class AccountHistoryComponent implements OnInit {
  today = Date.now();
  account: Account;
  transactions: Transaction[];
  transactionsByperiod: Transaction[] =[];
  id: number;
  starDate: Date;
  endDate: Date;
  private sub: any;
  accountService: AccountService;
  constructor(private route: ActivatedRoute, accountService: AccountService,private titleService: Title) {
    this.titleService.setTitle("Account History");
    this.accountService = accountService;
   }
  getTransactionsByAccount() {
    this.accountService.getTransactionsByReferenceAndDate(this.account.accountNumber,this.starDate,this.endDate).subscribe(
      
      res => {
        $('#list').DataTable().destroy();
        this.transactions = res.json();

      setTimeout(function(){

        $(function () {
          $('#list').DataTable( {
                  dom: 'Bfrtip',
                  buttons: [
                       'pdf', 'print'
                  ]
              } );
              })  
      },500)
    }
    );
  }

  getAccount(accountNumber) {
    this.accountService.getAccount(accountNumber).subscribe(
      res => {
      this.account = res.json();
      }
    );
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getAccount(this.id);
      $(function () {
  var table=  $('#list').DataTable( {
          dom: 'Bfrtip',
          buttons: [
               'pdf', 'print'
          ]
      } );
      })
    
    });

  }
  onSubmit(dateForm: NgForm) {
    this.endDate = dateForm.value.endDate;
    this.starDate = dateForm.value.starDate;
    if (this.account !== undefined)
      this.getTransactionsByAccount();
  }
}