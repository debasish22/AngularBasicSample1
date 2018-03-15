import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import { SingleSlotContent } from './SingleSlotContent.component';
import { SingleSlotChildComponent } from './SingleSlotContentChild.Content';
import { MultiSlotContent } from './MultiSlotContent.component';
import { MultiSlotChildComponent } from './MultiSlotContentChild.component';
import { RouterModule } from '@angular/router';
import { routes } from './content.routing';
import { HomeComponent } from './Home.component';






@NgModule({
    declarations:[SingleSlotContent,SingleSlotChildComponent
        ,MultiSlotContent,MultiSlotChildComponent,HomeComponent],
    imports:[BrowserModule,RouterModule.forRoot(routes)],
    bootstrap:[HomeComponent]

})

export class ContentProjectionModule{}