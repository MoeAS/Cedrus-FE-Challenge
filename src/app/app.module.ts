import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollSpyModule, ScrollSpyService } from 'ng-spy';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutModule } from './components/about/about.module';
import { ContactModule } from './components/contact/contact.module';
import { HeaderModule } from './components/header/header.module';
import { HomeModule } from './components/home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemsModule } from './components/items/items.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    AboutModule,
    HomeModule,
    ContactModule,
    ItemsModule,
    ReactiveFormsModule,
    ScrollSpyModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ ScrollSpyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
