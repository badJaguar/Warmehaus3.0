import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChipsModule } from 'src/app/header-part/chips/chips.module';
import { MaterialShareModule } from 'src/app/modules/material-share/material-share.module';
import { Cab14WRoutingModule } from './cab14-w-routing.module';
import { Cab14WComponent } from './cab14-w.component';



@NgModule({
  declarations: [Cab14WComponent],
  imports: [
    CommonModule,
    Cab14WRoutingModule,
    MaterialShareModule,
    ChipsModule,
  ]
})
export class Cab14WModule { }
