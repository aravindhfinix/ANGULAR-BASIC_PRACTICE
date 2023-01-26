import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import { BadgeComponent } from './badge/badge.component';
@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent
  ],
  imports: [
    MatBadgeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
