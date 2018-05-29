import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, CarComponent } from './app.component';

import { CarService } from './car.service';

@NgModule({

  declarations: [
    AppComponent, CarComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  providers: [CarService], // hier wird der Service auf der Module-Ebene(!) eingebunden

  bootstrap: [AppComponent]
})

export class AppModule { }
