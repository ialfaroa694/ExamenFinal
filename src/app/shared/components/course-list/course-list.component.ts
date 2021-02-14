import { Component, OnInit } from '@angular/core';
import { ICourseContainer } from '../../Interfaces/course';
import { CourseContainerData } from '../../mocks/course.mock';
import { CourseService } from '../../service/course/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  varcourse: ICourseContainer[];
  constructor(
    private courseServ: CourseService
    ) { }

  ngOnInit(): void {
     this.varcourse = this.fetchCourses();
  }

  fetchCourses(): ICourseContainer[]{
    console.log(this.varcourse);
    return CourseContainerData;
  }
}
