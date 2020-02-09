import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarmingMat200WRoutingModule } from './warming-mat200-w-routing.module';
import { WarmingMat200WComponent } from './warming-mat200-w.component';
import { MaterialShareModule } from 'src/app/modules/material-share/material-share.module';
import { ChipsModule } from 'src/app/header-part/chips/chips.module';

@NgModule({
  declarations: [WarmingMat200WComponent],
  imports: [
    CommonModule,
    WarmingMat200WRoutingModule,
    MaterialShareModule,
    ChipsModule,
  ],
})
export class WarmingMat200WModule { }
