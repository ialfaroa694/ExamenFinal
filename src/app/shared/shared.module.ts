import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseService } from './service/course/course.service';
import { CourseListComponent } from './components/course-list/course-list.component';

@NgModule({
  declarations: [
    CourseListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CourseListComponent,
  ],
  providers: [
    {provide: CourseService},
  ]
})
export class sharedModule { } // tslint:disable-line
