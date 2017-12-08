import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AccountHistoryComponent } from './component/account-history/account-history.component';
import { AccountHistoryService } from './Service/account-history.service';
import { AccountAuthentificationComponent } from './Component/account-authentification/account-authentification.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountHistoryComponent,
    AccountAuthentificationComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [AccountHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
