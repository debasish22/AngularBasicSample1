import { Component } from "@angular/core";
import {BehaviorSubject } from 'rxjs/BehaviorSubject'

@Component({
    selector:'changeDetectorHome',
    templateUrl:'ChangeDetection/Views/parent.html'
  })
  export class changeDetectionHomeComponent {
      cars=['benz','Audi','Polo'];
      carsUsingObservable=new BehaviorSubject(['benz','Audi','Polo']);

      addCars(car:string){

this.cars.push(car); //not sending a cars new reference


//this.cars=[...this.cars,car]; //sending new reference for @input parameter of child
// this.carsUsingObservable.next(this.cars);
      }
 
    }
    

