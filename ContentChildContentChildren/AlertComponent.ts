import { Component, Input, QueryList, ContentChildren } from "@angular/core";
import { TestComponent } from "./test.component";

@Component({
    selector: 'alert',
    template: `
          {{studData}}
          <ng-content></ng-content>
    `,
  })
  export class AlertComponent {
    @Input() type: string = "success";
    @Input('studentData') studData:string
    @ContentChildren(TestComponent) tests: QueryList<TestComponent>
    // alert() {
    //   console.log("alert");
    // }

    
    ngAfterContentInit(){
           
      this.tests.forEach(pa=>console.log(pa));
      
      }
  }