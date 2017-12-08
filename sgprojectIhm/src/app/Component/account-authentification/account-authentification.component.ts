import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Account} from '../../Model/Account';
import { RouterModule, Router } from '@angular/router';
import {AccountAuthentificationService} from '../../Service/account-authentification.service'
@Component({
  selector: 'app-account-authentification',
  templateUrl: './account-authentification.component.html',
  styleUrls: ['./account-authentification.component.css'],
  providers : [AccountAuthentificationService]
})
export class AccountAuthentificationComponent implements OnInit {
  isAccount : boolean = false;
  accountNumber : Number;
  router : Router;
  accountAuthentificationService : AccountAuthentificationService;
  submitted = false;
  constructor(router : Router,accountAuthentification : AccountAuthentificationService) {
  this.accountAuthentificationService = accountAuthentification;
    this.router= router;
}
  @Output() accountEvent = new EventEmitter<Account>();

  onSubmit(accountForm: NgForm){this.submitted=true;
    this.isValidAccount(accountForm.value.accountNumber);
    if(this.isAccount == true){
      this.accountNumber = accountForm.value.accountNumber;
      this.router.navigate(['account/history',this.accountNumber])
    }else{
      
    }

  }
  ngOnInit() {
    
  }
  isValidAccount(accountNumber){
     this.accountAuthentificationService.isValidAccount(accountNumber).subscribe(
      (res) => this.isAccount = res.json(),
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
    );
    
  }

}
