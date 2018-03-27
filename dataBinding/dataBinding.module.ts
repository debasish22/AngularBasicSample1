import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home.component';
import { InterPolationComponent }  from './interpolation.component';
import {ElementPropertyBindingComponent} from './elementPropertyBinding';


import {routes} from './databinding.routes';
import { ChildComponent } from './child.component';
import { EventComponent } from './event.component';
import { twoWayDatabinding } from './twowaybinding.component';

@NgModule({
  imports:      [ BrowserModule,
    FormsModule,
  RouterModule.forRoot(routes) ],//Appmodule is gng to use Browser module to boostrap title Component 
  declarations: [ InterPolationComponent,
    ElementPropertyBindingComponent,
    ChildComponent,
    EventComponent,
    twoWayDatabinding,
    HomeComponent ],
  bootstrap:    [ HomeComponent ]
})
export class DataBindingModule { }
