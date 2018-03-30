import {Directive,ElementRef,Renderer,AfterViewInit} from '@angular/core'


@Directive({
    selector:'[changeColor]'
})

export class changeColorDirective implements AfterViewInit{

    constructor(private eleref:ElementRef,private renderer:Renderer ){

    }
    ngAfterViewInit(){

        this.renderer.setElementStyle(this.eleref.nativeElement,'color','red');
      
    }

    change(changedColor:string){
        this.renderer.setElementStyle(this.eleref.nativeElement,'color',changedColor);
  
    }
} 