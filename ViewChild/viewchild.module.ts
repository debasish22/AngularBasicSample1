import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import { RouterModule } from '@angular/router';
import { routes } from './viewchild.Routing';

//components
import { viewChildParentComponent } from './ViewChildUsingComponents/viewchildParent.component';
import { NumberComponent } from './ViewChildUsingComponents/viewchildChildComponent.component';
import { viewChildHomeComponent } from './home.component';
import { viewChildParentDirectiveComponent } from './ViewChildUsingDirectives/viewchildParentForDirective.component';
import { ViewchildTemplateParentComponent } from './ViewChildUsingTemplateVariable/viewchildusingTemplateParent.component';


//Directives
import { changeColorDirective } from './ViewChildUsingDirectives/changeColor.directive';


@NgModule({
    imports:[BrowserModule, RouterModule.forRoot(routes)],
    declarations:[viewChildHomeComponent,
        viewChildParentComponent,
        NumberComponent,
        viewChildParentDirectiveComponent,
        changeColorDirective,
        ViewchildTemplateParentComponent
    ],
    bootstrap:[viewChildHomeComponent]
})

export class ViewChildModule{

}