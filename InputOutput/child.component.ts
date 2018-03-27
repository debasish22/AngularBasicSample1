import {Component } from '@angular/core';

import { Input,Output, EventEmitter } from "@angular/core";

@Component({

  selector:'inouthchild',
  templateUrl:'InputOutput/Views/child.html'
})

export class inOutChildComponent{

    @Input ('msgForChild') inputMessage:string;
    @Output('outPutMsgFromChild') outputMessage=new EventEmitter<number>();

    num1:string;
    num2:string;

  addnumber(){
  this.outputMessage.emit(parseInt(this.num1) + parseInt(this.num2));
  }
    
}