import {Component} from '@angular/core';
import {Company} from './company'

@Component({
    selector: 'pipe-app',
    template: `<h3>3. Using division Pipe</h3>
    <div>Dividend: <input [(ngModel)]="dividend"> </div>
    <div>Divisor: <input [(ngModel)]="divisor"> </div>
    <p>
      Division Result: {{dividend | division: divisor}}
    </p>
    

    Company Name: <input [(ngModel)] ="compName"/> {{compName}}
    <br/>Location: <input [(ngModel)] ="compLocation"/> {{compLocation}}
    <br/><br/><button (click)="updateCompany()">Update Existing</button> 
    <button (click)="createCompany()">Create New </button> 
        
 
    <br/><b>a. Using Pure Pipe : companyone</b><br/><br/>
    {{company | companyone}}
			  
    <br/><br/><b>b. Using Impure Pipe : companytwo</b><br/><br/>
    {{company | companytwo}}

    
    `
})

export class CustomPipeComponent{


    //For division Pipe
	dividend : number = 23;
    divisor : number = 7;
    
   // Pure pipes executes only for pure changes in its input values. 
   // Find the pure changes. 
   // a. Change to a primitive input values such as String, Number, Boolean. 
   // b. Change to object reference of Date, Array, Function, Object. 


    //For pure and impure pipe
	compName:string = "ABCD LTD";
	compLocation:string = "Varanasi";
	company = new Company(this.compName, this.compLocation);

    //Impure change because there is no change in object reference: company	
	//Impure pipe will run again and Pure pipe will do nothing.
	updateCompany() {
	   this.company.cname = this.compName;
	   this.company.location = this.compLocation;
	}
	
	//Pure change because there is change in object reference: company	
	//Impure pipe and Pure pipe both will run again.
	createCompany() {
	   this.company = new Company(this.compName, this.compLocation);   
    }
    
    // Impure pipes will run for every component change detection cycle. 
    // So it is obvious that impure pipes will also run for pure changes. 
    // Impure pipe will run for every keystroke or mouse move. 
    // So the conclusion is that impure pipe will run a lot and hence we should take care while using 
    // impure pipe because it may reduce performance of the application and can destroy user experience. 

}