import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      ssrObserveBreakpoints: ['xs', 'lt-md'],
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
  ]
})
export class ContactsModule { }
