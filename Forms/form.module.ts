import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'   
import { ReactiveFormsModule } from '@angular/forms';

//components
import { FormsHomeComponent } from './home.component';
import { ReactiveFormsComponent } from './ReactiveForm.component';


@NgModule({
    imports:[BrowserModule,ReactiveFormsModule],
    declarations:[ReactiveFormsComponent,FormsHomeComponent],
    bootstrap:[ReactiveFormsComponent]
})
export class FormsModule{

}