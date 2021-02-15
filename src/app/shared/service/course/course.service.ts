import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICourseContainer } from '../../interfaces/course';
import { ICourseService } from '../../interfaces/icourse-service';
import { CourseContainerData } from '../../mocks/course.mock';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getFeaturedCourses(): ICourseContainer[] {
    const featuredCourse: ICourseContainer[] = CourseContainerData.filter(c => c.featured === true);
    return featuredCourse;
  }

  getCourses(): ICourseContainer[] {
    return CourseContainerData;
  }

  getCourse(id: number): ICourseContainer {
    const course: ICourseContainer = CourseContainerData.find(c => c.id === id); // tslint:disable-line
    return course;
  }

}
