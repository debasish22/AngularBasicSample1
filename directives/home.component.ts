import {Component } from '@angular/core'


@Component({

    selector:'homedirextv',
    template:`
<h5> Demo on Directives </h5>

<nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
    <div class="container">
        <a class="navbar-brand">Angular Directives</a>
        <ul class="nav navbar-nav" routerLinkActive="active">
            <li class="nav-item"><a class="nav-link" [routerLink]="['/']">AttributeDirective</a></li>
            <li class="nav-item"><a class="nav-link" [routerLink]="['/structural']">StructuralDirective</a></li>
            <li class="nav-item"><a class="nav-link" [routerLink]="['/customattrdirective']">CustomsttributeDirective</a></li>
        </ul>
    </div>
</nav>
    
  
    <div class="outer-outlet">
      <router-outlet></router-outlet>
    </div>
    `
})
export class HomeComponent{

    
}