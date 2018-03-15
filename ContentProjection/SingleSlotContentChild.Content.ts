import {Component} from '@angular/core';
import { SingleSlotContent } from './SingleSlotContent.component';



@Component({
    selector: 'single-slot',
    providers: [],
    template: `
      <div>
        Hello Angular
        <hr/>
        <single-content>
          <span>This is Single Slot Content Projection</span>
          
        </single-content>
      </div>
    `,
  })
  export class SingleSlotChildComponent{}