import {Component} from '@angular/core'


@Component({

    selector:'attrDirective',
    template:`<p [style.color]="'red'">Directives are awesome</p>`

})
export class AttributeDirectiveComponent{

}