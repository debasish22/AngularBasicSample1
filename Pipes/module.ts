
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {CustomPipeComponent}  from './custompipe.component';
import { DivisionPipe } from './division.pipe';
import { CompanyOnePipe } from './companyone.pipe';
import { CompanyTwoPipe } from './companytwo.pipe';



@NgModule({
    imports:      [BrowserModule,
                   FormsModule],
    declarations: [CustomPipeComponent,DivisionPipe,CompanyOnePipe,CompanyTwoPipe],
    bootstrap:[CustomPipeComponent]
  })
  export class AppModule { } 