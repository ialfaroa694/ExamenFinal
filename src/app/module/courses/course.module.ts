import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { CourseListPageComponent } from './pages/course-list-page/course-list-page.component';


@NgModule({
  declarations: [CourseDetailPageComponent, CourseListPageComponent],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
