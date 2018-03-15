//our root app component
import {Component} from '@angular/core'

@Component({
  selector: 'home-component',
  template: `
    <h3>Content projection Demo</h3>
    <div class="box">
      <ul>
      <a routerLink="">SingleSlotContent Projection</a>
      <a routerLink="/multi">MultiSlotContent Projection</a>
      </ul>

    </div>

    <router-outlet></router-outlet>
    
  `,
  styles: [
    `
    .box {
      min-height: 30px;
      border: 1px solid black;
      display: block;
    }
    `
  ]
})

export class HomeComponent{
    
}