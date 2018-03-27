import { Routes } from '@angular/router';

import { InterPolationComponent } from './interpolation.component';
import { ElementPropertyBindingComponent } from './elementPropertyBinding';
import { EventComponent } from './event.component';

export const routes: Routes = [
  { path: 'xxx', component:InterPolationComponent  },
  { path: 'element', component:ElementPropertyBindingComponent},
  {path:'',component:EventComponent  }
];
