import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router : Router){}
  connected: boolean = true;
  logout() {
    localStorage.removeItem('currentAccount');
  }
  isConnected() {
    if (localStorage.getItem('currentAccount') !== undefined) {
      this.connected = true;
    } else {
      this.connected = false;
    }
    
  }
  getAccount()
{
  return localStorage.getItem("currentAccount");
}  goToHistory(){
  this.router.navigate(['account/history',localStorage.getItem("currentAccount") ])
  
  }
  goTowithdrawl(){
    this.router.navigate(['account/withdrawl',localStorage.getItem("currentAccount") ])
    
  }
  goTodeposite(){
    this.router.navigate(['account/deposit',localStorage.getItem("currentAccount") ])
    
  }
}
