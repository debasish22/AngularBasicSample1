import {Component, ViewEncapsulation} from '@angular/core';


import { ChildComponent } from './child.component';








@Component({
    selector:'parent',
    templateUrl:"ViewEncapsulation/Views/parent.html",
    styles:[
        `
           .pcolor{
            color:black;
            background-color:red
        }
        `

    ],
    encapsulation:ViewEncapsulation.Emulated  //byDefault Emulated , can be none and native as well
})

export class ParentComponent{}