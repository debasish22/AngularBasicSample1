import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TitleComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],//Appmodule is gng to use Browser module to boostrap title Component 
  declarations: [ TitleComponent ],
  bootstrap:    [ TitleComponent ]
})
export class AppModule { }
