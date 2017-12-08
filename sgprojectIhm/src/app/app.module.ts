import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountHistoryComponent } from './component/account-history/account-history.component';
import { AccountHistoryService } from './Service/account-history.service';
import { AccountAuthentificationComponent } from './Component/account-authentification/account-authentification.component';

const appRoutes: Routes = [
  { path: 'index', component: AccountAuthentificationComponent },
  { path: 'account/history/:id',      component: AccountHistoryComponent },
 
];
@NgModule({
  declarations: [
    AppComponent,
    AccountHistoryComponent,
    AccountAuthentificationComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [AccountHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
