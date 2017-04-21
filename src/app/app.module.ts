import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { PathwayMap } from './pathway-map/pathway-map.component';
import { AppBar } from './app-bar/app-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PathwayMap,
    AppBar
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
