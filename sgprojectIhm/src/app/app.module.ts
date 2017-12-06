import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AccountHistoryComponent } from './account-history/account-history.component';
import { AccountHistoryService } from './Service/account-history.service';


@NgModule({
  declarations: [
    AppComponent,
    AccountHistoryComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [AccountHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
