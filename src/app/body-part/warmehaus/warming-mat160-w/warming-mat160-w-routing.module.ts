import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarmingMat160WComponent } from './warming-mat160-w.component';

const routes: Routes = [{ path: '', component: WarmingMat160WComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarmingMat160WRoutingModule { }
