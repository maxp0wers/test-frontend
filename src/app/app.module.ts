import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgLottolandModule } from 'ng-lottoland';
import { FirstStepComponent } from './first-step/first-step.component';
import { ResultsComponent } from './results/results.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstStepComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgLottolandModule,
  ],
  providers: [
    { provide: ApiService, useClass: ApiService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
