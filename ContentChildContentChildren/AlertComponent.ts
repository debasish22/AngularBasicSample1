import { Component, Input } from "@angular/core";

@Component({
    selector: 'alert',
    template: `
          {{studData}}
    `,
  })
  export class AlertComponent {
    @Input() type: string = "success";
    @Input('studentData') studData:string
    
    // alert() {
    //   console.log("alert");
    // }
  }