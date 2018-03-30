import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import { NgTemplateComponent } from "./ngTemplate.component";


@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[NgTemplateComponent],
  bootstrap:[NgTemplateComponent]
})
export class NgTemplatemoduleModule{ }