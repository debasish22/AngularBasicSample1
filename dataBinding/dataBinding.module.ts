import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {HomeComponent} from './home.component';
import { InterPolationComponent }  from './interpolation.component';
import {ElementPropertyBindingComponent} from './elementPropertyBinding';


import {routes} from './databinding.routes';
import { ChildComponent } from './child.component';
import { EventComponent } from './event.component';

@NgModule({
  imports:      [ BrowserModule,
  RouterModule.forRoot(routes) ],//Appmodule is gng to use Browser module to boostrap title Component 
  declarations: [ InterPolationComponent,
    ElementPropertyBindingComponent,
    ChildComponent,
    EventComponent,
    HomeComponent ],
  bootstrap:    [ HomeComponent ]
})
export class DataBindingModule { }
