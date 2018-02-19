import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataBindingComponent }  from './dataBinding.component';

@NgModule({
  imports:      [ BrowserModule ],//Appmodule is gng to use Browser module to boostrap title Component 
  declarations: [ DataBindingComponent ],
  bootstrap:    [ DataBindingComponent ]
})
export class DataBindingModule { }
