import { Routes } from '@angular/router';
import { viewChildParentComponent } from './ViewChildUsingComponents/viewchildParent.component';
import { viewChildParentDirectiveComponent } from './ViewChildUsingDirectives/viewchildParentForDirective.component';
import { ViewchildTemplateParentComponent } from './ViewChildUsingTemplateVariable/viewchildusingTemplateParent.component';

export const routes:Routes=[
    {path:'',component:viewChildParentComponent},
    {path:'viewchildusingDirective',component:viewChildParentDirectiveComponent},
    {path:'viewchildusingTemplateRef',component:ViewchildTemplateParentComponent}
];
