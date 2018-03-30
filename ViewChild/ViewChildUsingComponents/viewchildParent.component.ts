import {Component, ViewChild} from '@angular/core'
import { NumberComponent } from './viewchildChildComponent.component';


@Component({
    selector:'viewchildParent',
    templateUrl:'ViewChild/ViewChildUsingComponents/Views/viewchildparent.html'
})
export class     viewChildParentComponent{

    @ViewChild(NumberComponent) private numberComponent:NumberComponent;

    increase() {
        this.numberComponent.increaseByOne();
     }
     decrease() {
        this.numberComponent.decreaseByOne();
     }

}