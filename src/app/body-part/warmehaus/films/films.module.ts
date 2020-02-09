import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChipsModule } from '../../../../app/header-part/chips/chips.module';
import { MaterialShareModule } from '../../../../app/modules/material-share/material-share.module';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';



@NgModule({
  declarations: [FilmsComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    MaterialShareModule,
    ChipsModule,
  ]
})
export class FilmsModule { }
