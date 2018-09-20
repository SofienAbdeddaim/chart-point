import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DxChartModule} from "devextreme-angular";
import {Service} from "./app.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxChartModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
