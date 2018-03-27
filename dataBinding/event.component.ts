import {Component, Input} from '@angular/core';


@Component({
    selector: 'myeventcomponent',
    templateUrl: 'dataBinding/Views/event.component.html',  
})
export class EventComponent{
    
    data:string;
    public clickFunction():void{
this.data="You got the value"
     
    }
}