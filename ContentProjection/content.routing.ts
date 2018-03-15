import { Routes } from '@angular/router';

import { SingleSlotChildComponent } from './SingleSlotContentChild.Content';
import { MultiSlotChildComponent } from './MultiSlotContentChild.component';

export const routes: Routes = [
  { path: '', component: SingleSlotChildComponent },
  { path: 'multi', component:MultiSlotChildComponent  }
];
