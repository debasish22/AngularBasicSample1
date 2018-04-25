import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"
import { AppComponent } from "./app.component";
import { AlertComponent } from "./AlertComponent";
import {TestComponent}  from "./test.component"


@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent,AlertComponent,TestComponent],
    bootstrap:[AppComponent]
})
export class ContentModule{

}