
import { Directive,HostListener, ElementRef, Renderer } from '@angular/core';

//Directive Decorator
@Directive({

    selector:'[myUnderLine]'     

})

export class UnderLineDirective{
  
     constructor(public el:ElementRef,public renderer:Renderer)    {

       
     }

     ngOnInit(){
          // Use renderer to render the element with styles
       // this.renderer.setElementStyle(this.el.nativeElement,'display','none');
        // renderer.setElementClass()
        //renderer.setElementProperty()
        //renderer.setElementAttribute()
     }

     //Adding Events for Directives using HostListener

     @HostListener('mouseenter') onMouseenter(){

        //call any method when this event is raised
        this.hover(true);

     }

     @HostListener('mouseleave') onmouseleave(){
        
        //call any method when this event is raised
        this.hover(false);

     }

     hover(isUnderLine:boolean){

        if(isUnderLine){
            this.renderer.setElementStyle(this.el.nativeElement,'text-decoration','underline')
        }
        else{
            this.renderer.setElementStyle(this.el.nativeElement,'text-decoration','none')
        }
     }
}