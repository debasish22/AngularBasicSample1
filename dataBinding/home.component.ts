import { Component } from '@angular/core';

@Component({
    selector: 'homeComponentForDataBinding',
    template: `
      <a [routerLink]="['/']">InterPolation</a>
      <a [routerLink]="['/element']">ElementPropertyBinding</a>
      <a [routerLink]="['/event']">EventBinding</a>
      <div class="outer-outlet">
        <router-outlet></router-outlet>
      </div>
    `
  })

export class HomeComponent{}