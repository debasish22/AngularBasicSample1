import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";


import { InputOutputHomeComponent } from "./home.component";
import { route } from "./inputoutput.routing";
import { inputoutputparentcomponent } from "./parent.component";
import { inOutChildComponent } from "./child.component";




@NgModule({
    imports:[BrowserModule
        ,FormsModule
        ,RouterModule.forRoot(route)],
    declarations:[InputOutputHomeComponent
                ,inputoutputparentcomponent
                ,inOutChildComponent],
  bootstrap:[InputOutputHomeComponent]
})
export class InputOutputModule{}