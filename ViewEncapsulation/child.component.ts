import {Component, ViewEncapsulation} from '@angular/core'




@Component({
    selector:'child',
    templateUrl:"ViewEncapsulation/Views/child.html",
    encapsulation:ViewEncapsulation.None

})

export class ChildComponent{}