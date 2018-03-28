import { NgModule } from "@angular/core";
import {BrowserModule } from '@angular/platform-browser'
import { changeDetectionHomeComponent } from "./home.component";
import { changeDetectionChildComponent } from "./child.component";

@NgModule({
    imports:[BrowserModule],
    declarations:[changeDetectionHomeComponent,changeDetectionChildComponent],
    bootstrap:[changeDetectionHomeComponent]
})
export class changeDetectionModule{ }