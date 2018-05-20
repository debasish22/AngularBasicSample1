import {Component} from '@angular/core'
import { NgForm } from '@angular/forms';
import { userLogin } from './login.interface';

@Component({
    selector:'templateDriven',
    templateUrl:'Forms/Views/templatedriven.html'
})
export class TemplateDrivenFormComponent{

   user:userLogin={
    name: '',
    email:'',
    age:0,
    address: {
      country: '',
      city: ''
    }
   }
    userName:string;
constructor(){ }

onSubmit(validateForm:userLogin){
console.log(validateForm);
}
}