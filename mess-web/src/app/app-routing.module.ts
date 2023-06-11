import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopicComponent} from "./topic/topic.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'topic', component: TopicComponent },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
