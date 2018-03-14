
import {Component} from '@angular/core'


@Component({
    selector:'structDirective',
    template:`<ul>
    <li *ngFor="let person of people"> 
      {{ person.name }}
    </li>
   </ul>`
})
export class StructuralDirectiveComponent{

    people: any[] = [
        {
          "name": "Douglas  Pace"
        },
        {
          "name": "Mcleod  Mueller"
        },
        {
          "name": "Day  Meyers"
        },
        {
          "name": "Aguirre  Ellis"
        },
        {
          "name": "Cook  Tyson"
        }
      ];

  
} 