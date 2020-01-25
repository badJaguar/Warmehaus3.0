import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPageRoutingModule } from './start-page-routing.module';
import { StartPageComponent } from './start-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialShareModule } from 'src/app/modules/material-share/material-share.module';


@NgModule({
  declarations: [StartPageComponent],
  imports: [
    CommonModule,
    StartPageRoutingModule,
    MaterialShareModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      ssrObserveBreakpoints: ['xs', 'lt-md'],
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
  ]
})
export class StartPageModule { }
