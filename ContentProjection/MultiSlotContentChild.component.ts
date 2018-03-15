import {Component} from '@angular/core';
import { MultiSlotContent } from './MultiSlotContent.component';


@Component({
    selector: 'my-app',
    providers: [],
    template: `
      <div>
        Hello Angular
        <hr/>
        <multi-content>
          <span header>This is projected to the header region</span>
          <div body>
            This goes to the body instead.
          </div>
        </multi-content>
      </div>
    `,
  })
  export class MultiSlotChildComponent{}