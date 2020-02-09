
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips.component';
import { MaterialShareModule } from 'src/app/modules/material-share/material-share.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ChipsComponent],
  exports: [ChipsComponent],
  imports: [CommonModule, MaterialShareModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChipsModule { }
