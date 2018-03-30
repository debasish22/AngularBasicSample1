import {Routes} from '@angular/router'
import { AttributeDirectiveComponent } from './attributedirective.component';
import { StructuralDirectiveComponent } from './structuralDirective.component';
import { DisplayAttributeDirective } from './displayCustomAttributeDirective.component';
import { DisplayStructuralDirectiveComponent } from './displayCustomStructuraldirective.component';

export const routes:Routes=[

{ path:'', component:AttributeDirectiveComponent } ,
{ path:'structural',component:StructuralDirectiveComponent},
{ path:'customattrdirective', component:DisplayAttributeDirective},
{ path:'customstructuraldirective', component:DisplayStructuralDirectiveComponent}




];