import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ScrollSpyModule } from 'ng-spy';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ScrollSpyModule,
    NgbModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
