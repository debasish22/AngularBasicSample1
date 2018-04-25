import { Component, ViewChildren, QueryList, ViewChild, ContentChild } from "@angular/core";
import { AlertComponent } from "./AlertComponent";
import {TestComponent}  from "./test.component"

@Component({
    selector: 'my-app',
    template: `
    <input type="text" placeholder="Enter Subject" #subject/>
    <button (click)="addSubjects(subject.value)"></button>
      <alert *ngFor="let x of test" [studentData]="x">
      </alert>
      <alert>
      <test></test> 
      <test></test>
      </alert>
      
    `,
  })
  export class AppComponent {
    @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>//this will return a component instance
      
    @ContentChild("InsideNgContent") insideNgConent:any;
    test:any[]=["physics","chem"]

    ngAfterViewInit() {
      this.alerts.forEach(alertInstance => console.log(alertInstance));
      //this.divs.forEach(divInstance => console.log(divInstance));
    }


    addSubjects(subject:string){
      console.log(subject);
        this.test.push(subject);
        this.alerts.forEach(alertInstance => console.log(alertInstance));
    }
}
  