import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChickenComponent } from './chicken/chicken.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './vendor/material.module';
import { NavComponent } from './nav/nav.component';
import { BasicFilterPipe } from './pipes/basicFilterPipe';
import { PorkComponent } from './pork/pork.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: 'chicken', component: ChickenComponent },
      {path: 'pork', component: PorkComponent },
      {path: 'dashboard', component: DashboardComponent },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ])
  ],
  declarations: [
    AppComponent, 
    ChickenComponent, 
    NavComponent, 
    BasicFilterPipe, 
    PorkComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
