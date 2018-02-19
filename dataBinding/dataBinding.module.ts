import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {HomeComponent} from './home.component';
import { InterPolationComponent }  from './interpolation.component';
import {ElementPropertyBindingComponent} from './elementPropertyBinding';

import {routes} from './databinding.routes';

@NgModule({
  imports:      [ BrowserModule,
  RouterModule.forRoot(routes) ],//Appmodule is gng to use Browser module to boostrap title Component 
  declarations: [ InterPolationComponent,ElementPropertyBindingComponent,HomeComponent ],
  bootstrap:    [ HomeComponent ]
})
export class DataBindingModule { }
