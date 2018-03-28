import { Component } from "@angular/core";

@Component({
    selector:'changeDetectorHome',
    templateUrl:'ChangeDetection/Views/parent.html'
  })
  export class changeDetectionHomeComponent {
  myData:{firstname:string,lastname:string}
  message:string;
    constructor(){

        this.myData={
            firstname: 'Debasish',
            lastname:'K'
        }
    }
    
  
    changeName() {
      this.myData.firstname = 'Brad';
      this.myData.lastname='pitt';
      this.message="ParentMessage";
          }
  }
