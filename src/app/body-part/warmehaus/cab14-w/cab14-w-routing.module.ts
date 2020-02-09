import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cab14WComponent } from './cab14-w.component';

const routes: Routes = [{ path: '', component: Cab14WComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cab14WRoutingModule { }
