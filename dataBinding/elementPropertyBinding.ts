import {Component} from '@angular/core';
@Component({
    selector: 'elementPropertyBinding',
    templateUrl: 'dataBinding/Views/element.component.html', 
    styleUrls: ['dataBinding/css/element.component.css']
})
export class ElementPropertyBindingComponent {
        flag = true;
	website = {
	     name : 'xxx',
	     url : 'http://www.google.com',
	     logo : 'images/logo.jpg',
	     description: 'Learn angular 2 property binding.'
	}
} 