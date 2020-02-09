import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChipsModule } from '../../../../app/header-part/chips/chips.module';
import { MaterialShareModule } from '../../../../app/modules/material-share/material-share.module';
import { Cab20WRoutingModule } from './cab20-w-routing.module';
import { Cab20WComponent } from './cab20-w.component';



@NgModule({
  declarations: [Cab20WComponent],
  imports: [
    CommonModule,
    Cab20WRoutingModule,
    MaterialShareModule,
    ChipsModule,
  ]
})
export class Cab20WModule { }
