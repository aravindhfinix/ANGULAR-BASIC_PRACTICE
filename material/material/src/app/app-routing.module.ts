import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BadgeComponent } from './badge/badge.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'badge', component: BadgeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
