import { Routes } from '@angular/router';

import { InterPolationComponent } from './interpolation.component';
import { ElementPropertyBindingComponent } from './elementPropertyBinding';

export const routes: Routes = [
  { path: '', component: InterPolationComponent },
  { path: 'element', component: ElementPropertyBindingComponent }
];
