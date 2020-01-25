import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { MaterialShareModule } from 'src/app/modules/material-share/material-share.module';


@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    PinchZoomModule,
    MaterialShareModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      ssrObserveBreakpoints: ['xs', 'lt-md'],
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
  ]
})
export class InfoModule { }
