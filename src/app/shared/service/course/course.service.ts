import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICourseContainer } from '../../interfaces/course';
import { ICourseService } from '../../Interfaces/icourse-service';

@Injectable({
  providedIn: 'root'
})
export class CourseService implements ICourseService{

  constructor() { }

  // getFeaturedCourses(): Observable<ICourseContainer[]>{
  //   return;
  // }
  getCourses(): Observable<ICourseContainer[]> {
    return;
  }
}
