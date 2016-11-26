import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DropdownComponent, DatepickerComponent} from '../../../blumjs/blumjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
