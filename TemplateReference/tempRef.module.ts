import {BrowserModule} from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { TemplateReferenceComponent } from './templateReference.component';


@NgModule({
    imports:[BrowserModule],
    declarations:[TemplateReferenceComponent],
    bootstrap:[TemplateReferenceComponent]
})
export class TempRefModule{

}