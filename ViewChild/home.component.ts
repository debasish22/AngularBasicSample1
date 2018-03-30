import {Component} from '@angular/core'


@Component({
    selector:'viewchildHome',
    template:`
    <nav class="navbar navbar-default" style="background:ghostwhite;color:black">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">DataBinding</a>
      </div>
      <ul class="nav navbar-nav">
        <li><a [routerLink]="['/']">ViewChildUsingComponents</a></li>
        <li><a [routerLink]="['/viewchildusingDirective']">ViewChildUsingDirective</a></li>
        <li><a [routerLink]="['/viewchildusingTemplateRef']">ViewChildUsingTemplateReference</a></li>
        
      </ul>
    </div>
  </nav>
  <div class="outer-outlet">
    <router-outlet></router-outlet>
  </div>
    
    `
})
export class viewChildHomeComponent{

}