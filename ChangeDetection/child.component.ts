import { Component, Input, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from "@angular/core";
import { Observable } from "rxjs/Observable";


@Component({
    selector:'child',
    templateUrl:'ChangeDetection/Views/child.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
 export  class changeDetectionChildComponent implements OnInit{
     
   @Input('passObjectTochild') data:{firstname:string,lastname:string};
   @Input('passStringTochild') data1:Observable<string>;
   counter:number=0;
    constructor(private cd: ChangeDetectorRef){
       
    }

    ngOnInit(){
      this.data1.subscribe(
      (next)=>{
        this.counter ++;
        this.cd.markForCheck();
        //console.log(next);
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        console.log("completed");
      }

      )}
    
      
  }
