import { Component, Input, OnInit } from '@angular/core';
import { ICourseContainer } from 'src/app/shared/interfaces/course';
import { CourseService } from 'src/app/shared/service/course/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  @Input() courseId;
  course: ICourseContainer;
  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.fetchBook();
  }

  fetchBook(): void {
    this.course = this.courseService.getCourse(this.courseId);
  }
}
