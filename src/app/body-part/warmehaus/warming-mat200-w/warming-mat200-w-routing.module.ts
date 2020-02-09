import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarmingMat200WComponent } from './warming-mat200-w.component';

const routes: Routes = [{ path: '', component: WarmingMat200WComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarmingMat200WRoutingModule { }
