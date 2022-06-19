import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InteriorsComponent } from './interiors/interiors.component';
import { PropertiesComponent } from './properties/properties.component';
import { GallaryComponent } from './gallary/gallary.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { InteriorTemp1Component } from './interior-temp1/interior-temp1.component';
import { InteriorTemp2Component } from './interior-temp2/interior-temp2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InteriorsComponent,
    PropertiesComponent,
    GallaryComponent,
    Home1Component,
    Home2Component,
    InteriorTemp1Component,
    InteriorTemp2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
