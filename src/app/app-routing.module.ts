import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [

  { 
    path: '', component: HomeComponent,
    children:[
      { path: 'dashboard', component: DashboardComponent},
      { path: 'tasks', component: TodoComponent},
      { path: 'setting', component: SettingComponent},
    ] 
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
