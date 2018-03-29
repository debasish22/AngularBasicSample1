import {Component } from '@angular/core';

import { Input,Output, EventEmitter } from "@angular/core";

@Component({

  selector:'inouthchild',
  templateUrl:'InputOutput/Views/child.html'
})

export class inOutChildComponent{

  //variables
  private num1:string;
  private num2:string;
  private _message:string;
   
  //input/Output 

  @Input ('msgForChild') inputMessage:string;
  @Output('outPutMsgFromChild') outputMessage=new EventEmitter<number>();

  //input as getter and setter

  @Input() set message(message:string){
    this._message=message;
  }
  get message():string{ return this._message;}

  addnumber(){
  this.outputMessage.emit(parseInt(this.num1) + parseInt(this.num2));
  }
    
}