import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountHistoryComponent } from './component/account-history/account-history.component';
import { DepositeComponent } from './Component/deposite/deposite.component';
import {HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthentificationComponent } from './Component/authentification/authentification.component';
import { WithdrawalComponent } from './Component/withdrawal/withdrawal.component'
const appRoutes: Routes = [
  { path: '',  pathMatch: 'full',component: AuthentificationComponent },
  { path: 'login',  pathMatch: 'full',component: AuthentificationComponent },
  { path: 'account/history/:id',      component: AccountHistoryComponent },
  { path : 'account/deposit/:id' , component : DepositeComponent},
  { path : 'account/withdrawl/:id' , component : WithdrawalComponent}
  
];
@NgModule({
  declarations: [
    AppComponent,
    AccountHistoryComponent,
    DepositeComponent,
    AuthentificationComponent,
    WithdrawalComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
