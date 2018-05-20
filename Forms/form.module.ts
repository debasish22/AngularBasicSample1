import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'   
import { ReactiveFormsModule,FormsModule } from '@angular/forms'; 
//ReactiveFormsModule - //For Model Driven /Reactive Forms
//FormsModule - //For Template Driven Forms


//components
import { FormsHomeComponent } from './home.component';
import { ReactiveFormsComponent } from './ReactiveForm.component';
import { TemplateDrivenFormComponent } from './TemplateDriven.component';


@NgModule({
    imports:[BrowserModule,ReactiveFormsModule,FormsModule],
    declarations:[ReactiveFormsComponent,FormsHomeComponent,TemplateDrivenFormComponent],
    bootstrap:[TemplateDrivenFormComponent]
})
export class FormModule{

}