import { Component } from '@angular/core';  
@Component({  
  selector: 'databinding',  
  templateUrl: 'dataBinding/Views/interpolation.html'  
})  
export class InterPolationComponent {   
    name = 'Angular 2/4/5 ';  
constructor(){}
    
public  interPolationTest(): string{

  return "Value from Function";
}
} 