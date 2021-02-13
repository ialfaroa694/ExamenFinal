import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListPagesComponent } from './pages/course-list-pages/course-list-pages.component';

const routes: Routes = [
  {
    path: '',
    component: CourseListPagesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
