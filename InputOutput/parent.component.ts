import {Component} from '@angular/core';

import { inOutChildComponent } from "./child.component";

@Component({

    selector:'inouthparent',
    templateUrl:'InputOutput/Views/parent.html'
  })

export class inputoutputparentcomponent{
    
result:number;
messageToChild:string="Data for Child";
    showResult(data:number){
this.result=data;

    }
}