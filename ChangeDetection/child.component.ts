import { Component, Input, ChangeDetectionStrategy, 
  ChangeDetectorRef, OnInit ,
  OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-child',
  templateUrl: 'ChangeDetection/Views/child.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ChildComponent implements OnInit,OnChanges{

  @Input() data: string[];
  //  @Input() obsrbdata:Observable<string[]>;
  // mycars:string[]=[];

  constructor(private cd:ChangeDetectorRef){ 
    console.log(this.data);
    
  }
  
  refresh(){
    this.cd.detectChanges();
    console.log(this.data);


  }

  ngOnChanges(changes:SimpleChanges){
    //This is called before ngOnInit and whenever more one or more data bound properties change.
const data:SimpleChange=changes.data;

console.log(data.currentValue);
console.log(data.previousValue)

  }
  ngOnInit(){
    // this.obsrbdata.subscribe(car=>{
    // this.mycars=[...this.mycars,...car];
    // this.cd.markForCheck();
    // })
  }
}