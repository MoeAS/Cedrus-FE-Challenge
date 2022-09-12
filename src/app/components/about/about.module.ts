import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

import { ItemsModule } from '../items/items.module';



@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    ItemsModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
