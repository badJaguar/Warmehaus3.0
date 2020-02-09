import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cab20WComponent } from './cab20-w.component';

const routes: Routes = [{ path: '', component: Cab20WComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cab20WRoutingModule { }
