import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoterComponent } from './components/voter/voter.component';
import { VoterResultComponent } from './components/voter/voter-result/voter-result.component';
import { VoterControlComponent } from './components/voter/voter-control/voter-control.component';
import {PColorDirective} from './directives/pColorDirective/pcolor.direcvite';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    VoterResultComponent,
    VoterControlComponent,
    PColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
