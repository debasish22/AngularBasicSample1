import { Routes } from '@angular/router';

import { InterPolationComponent } from './interpolation.component';
import { ElementPropertyBindingComponent } from './elementPropertyBinding';
import { EventComponent } from './event.component';
import { twoWayDatabinding } from './twowaybinding.component';

export const routes: Routes = [
  { path: '', component:InterPolationComponent  },
  { path: 'element', component:ElementPropertyBindingComponent},
  {path:'twoway',component:twoWayDatabinding},
  {path:'event',component:EventComponent  }
];
