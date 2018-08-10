import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoterComponent } from './components/voter/voter.component';
import { VoterResultComponent } from './components/voter/voter-result/voter-result.component';
import { VoterControlComponent } from './components/voter/voter-control/voter-control.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    VoterResultComponent,
    VoterControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
