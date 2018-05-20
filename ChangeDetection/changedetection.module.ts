import { NgModule } from "@angular/core";
import {BrowserModule } from '@angular/platform-browser'
import { changeDetectionHomeComponent } from "./cdhome.component";
import { ChildComponent } from "./child.component";

@NgModule({
    imports:[BrowserModule],
    declarations:[changeDetectionHomeComponent,ChildComponent],
    bootstrap:[changeDetectionHomeComponent]
})
export class changeDetectionModule{ }