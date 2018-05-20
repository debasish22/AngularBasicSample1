import {Component, OnInit} from '@angular/core';
import {FormBuilder
      ,FormGroup
      ,FormControl
      ,Validators} from '@angular/forms'

@Component({
selector:'reactiveForm',
templateUrl:'Forms/Views/reactive.html'
  
})

export class ReactiveFormsComponent implements OnInit{

    // registerForm = new FormGroup({
    //     firstname: new FormControl(),
    //     lastname: new FormControl(),
    //     address: new FormGroup({
    //       street: new FormControl(),
    //       zip: new FormControl(),
    //       city: new FormControl()
    //     })
    //   });

    registerForm:FormGroup;
    constructor(private formBuilder:FormBuilder){}
    
    ngOnInit(){
      this.registerForm=this.formBuilder.group({
    firstname: ['subbu',Validators.required],
    lastname: ['',Validators.required],
    address: this.formBuilder.group({
      street: '',
      zip: '',
      city: ''
    })
      })

      this.onchanges();
  }

    onSubmit(){
console.log(this.registerForm.value,this.registerForm.valid)
    }
onchanges():void{
     //subscribing to form changes
     this.registerForm.valueChanges.subscribe((data) => {
      //this.registerForm.controls['yourControlName'].value 
      console.log(data);
     });

     //subscribing to individual control changes

     this.registerForm.get('firstname').valueChanges.subscribe(val => {
      console.log(val);
    });
  }
    
  
   
    
}
