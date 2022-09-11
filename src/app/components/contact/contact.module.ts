import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
