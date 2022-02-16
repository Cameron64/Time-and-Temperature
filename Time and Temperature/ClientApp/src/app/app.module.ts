import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChickenComponent } from './chicken/chicken.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { TempToTimePipe } from './pipes/tempToTime';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  declarations: [AppComponent, ChickenComponent, TempToTimePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
