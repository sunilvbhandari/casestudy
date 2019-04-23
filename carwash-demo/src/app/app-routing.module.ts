import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { HomeComponent } from 'app/home/home.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},

  { path: '', pathMatch: 'full', redirectTo: 'home' },

  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
