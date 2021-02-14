import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { CourseListPageComponent } from './pages/course-list-page/course-list-page.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';

import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CourseDetailPageComponent,
    CourseListPageComponent,
    CourseDetailComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    sharedModule,
  ]
})
export class CourseModule { }
