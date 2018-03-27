import {Component, Input} from '@angular/core';


@Component({
    selector: 'mychild',
    templateUrl: 'dataBinding/Views/child.component.html',  
})
export class ChildComponent { 
	@Input() greeting: string;
	@Input() msg: string;
} 