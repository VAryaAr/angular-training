import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'dashboard',
    component: UserDashboardComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
