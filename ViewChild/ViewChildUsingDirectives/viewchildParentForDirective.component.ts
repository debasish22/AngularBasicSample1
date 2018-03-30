import {Component, ViewChild} from '@angular/core'
import { changeColorDirective } from './changeColor.directive';


@Component({
    selector:'viewchildParentForDirective',
    templateUrl:'ViewChild/ViewChildUsingDirectives/Views/viewchildParentDirective.html'

})
export class viewChildParentDirectiveComponent{

    @ViewChild(changeColorDirective) private changeDirective:changeColorDirective;
    changeColor(color: string) {
        this.changeDirective.change(color);
    }

}