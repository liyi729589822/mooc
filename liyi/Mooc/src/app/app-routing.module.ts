import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeadComponent } from './head/head.component';

const routes: Routes = [
  {path:"",redirectTo:"/main",pathMatch:"full"},
  {
    path:"main",component:MainComponent,
    // children:[
    //   {path:"",component:HeadComponent}
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
