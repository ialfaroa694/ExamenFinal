import { Component, OnInit, Input } from '@angular/core';
import { ICourseContainer } from '../../Interfaces/course';
import { CourseService } from '../../service/course/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @Input() isFeatured = true;
  @Input() showCourses = 4;

  varcourse: ICourseContainer[];

  classShowCourse: number;

  constructor(
      private courseServ: CourseService
    ) {
    }

  ngOnInit(): void {
    this.fetchCourses();
    this.classShowCourse = 12 / this.showCourses;
  }

  fetchCourses(): void {
    if(this.isFeatured){ // tslint:disable-line
      this.varcourse = this.courseServ.getFeaturedCourses();
    }else{
      this.varcourse = this.courseServ.getCourses();
    }
  }

}
