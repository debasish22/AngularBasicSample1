import { Component, ViewChildren, QueryList } from "@angular/core";
import { AlertComponent } from "./AlertComponent";

@Component({
    selector: 'my-app',
    template: `
    <input type="text" placeholder="Enter Subject" #subject/>
    <button (click)="addSubjects(subject.value)"></button>
      <alert *ngFor="let x of test" [studentData]="x">
      </alert>
     
    `,
  })
  export class AppComponent {
    @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>
    
    test:any[]=["physics","chem"]

    ngAfterViewInit() {
      this.alerts.forEach(alertInstance => console.log(alertInstance));
    }

    addSubjects(subject:string){
      console.log(subject);
        this.test.push(subject);
        this.alerts.forEach(alertInstance => console.log(alertInstance));
    }
}
  