import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InterPolationComponent }  from './interpolation.component';
import {ElementPropertyBindingComponent} from './elementPropertyBinding'
@NgModule({
  imports:      [ BrowserModule ],//Appmodule is gng to use Browser module to boostrap title Component 
  declarations: [ InterPolationComponent,ElementPropertyBindingComponent ],
  bootstrap:    [ ElementPropertyBindingComponent ]
})
export class DataBindingModule { }
