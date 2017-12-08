import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Account} from '../../Model/Account';
import {AccountAuthentificationService} from '../../Service/account-authentification.service'
@Component({
  selector: 'app-account-authentification',
  templateUrl: './account-authentification.component.html',
  styleUrls: ['./account-authentification.component.css'],
  providers : [AccountAuthentificationService]
})
export class AccountAuthentificationComponent implements OnInit {
  isAccount : boolean = false;
  account : Account;
  accountAuthentificationService : AccountAuthentificationService;
  submitted = false;
  constructor(accountAuthentification : AccountAuthentificationService) {
  this.accountAuthentificationService = accountAuthentification;
   }
  @Output() accountEvent = new EventEmitter<Account>();

  onSubmit(accountForm: NgForm){this.submitted=true;
    this.isValidAccount(accountForm.value.accountNumber);
    if(this.isAccount == true){
      this.getAccount(accountForm.value.accountNumber);
      this.sendAccount();
    }else{

    }

  }
  ngOnInit() {
    
  }
  sendAccount(){
    this.accountEvent.emit(this.account);
  }
  isValidAccount(accountNumber){
     this.accountAuthentificationService.isValidAccount(accountNumber).subscribe(
      (res) => this.isAccount = res.json(),
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
    );
    
  }
  getAccount(accountNumber){
    this.accountAuthentificationService.getAccount(accountNumber).subscribe(
      (res) => this.account = res.json(),
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
    );
  }
}
