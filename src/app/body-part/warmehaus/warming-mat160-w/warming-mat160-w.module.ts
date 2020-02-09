import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarmingMat160WRoutingModule } from './warming-mat160-w-routing.module';
import { WarmingMat160WComponent } from './warming-mat160-w.component';
import { MaterialShareModule } from 'src/app/modules/material-share/material-share.module';
import { ChipsModule } from 'src/app/header-part/chips/chips.module';

@NgModule({
  declarations: [WarmingMat160WComponent],
  imports: [
    CommonModule,
    WarmingMat160WRoutingModule,
    MaterialShareModule,
    ChipsModule
  ],
})
export class WarmingMat160WModule { }
