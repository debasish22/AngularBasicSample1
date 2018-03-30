import {Component} from '@angular/core'


 @Component({
     selector:'ngTemp',
     templateUrl:'NgTemplate/Views/ngTemplate.component.html'
 })
 export class NgTemplateComponent{
    allPersons = [
        {name: 'Mahesh', age: '25'},
        {name: 'Shakti', age: '23'},
        {name: 'Krishna', age: '23'},
        {name: 'Radha', age: '21'},	 
      ];
 myDir:string= '';
 }