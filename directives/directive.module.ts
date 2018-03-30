
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import{UnderLineDirective} from './customattributedirective.component'
import { HomeComponent } from './home.component';

import {routes} from './directives.routing'
import { AttributeDirectiveComponent } from './attributedirective.component';
import { StructuralDirectiveComponent } from './structuralDirective.component';

import { DisplayAttributeDirective } from './displayCustomAttributeDirective.component';
import { CpIfDirective } from './customstructural.directive';
import { DisplayStructuralDirectiveComponent } from './displayCustomStructuraldirective.component';

@NgModule({

    imports:[BrowserModule,
        RouterModule.forRoot(routes)],
    declarations:[UnderLineDirective
                ,HomeComponent
                ,AttributeDirectiveComponent
                ,StructuralDirectiveComponent
                ,DisplayAttributeDirective
                ,CpIfDirective
                ,DisplayStructuralDirectiveComponent],
    bootstrap:[HomeComponent]
})
export class DirectiveModule{

}