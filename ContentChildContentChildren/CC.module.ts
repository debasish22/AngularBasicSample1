import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"
import { AppComponent } from "./app.component";
import { AlertComponent } from "./AlertComponent";


@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent,AlertComponent],
    bootstrap:[AppComponent]
})
export class ContentModule{

}