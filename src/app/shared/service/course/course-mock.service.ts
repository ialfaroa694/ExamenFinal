import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import { ICourseContainer } from '../../interfaces/course';
import { CourseContainerData } from '../../mocks/course.mock';

@Injectable({
  providedIn: 'root'
})
export class CourseMockService{

  constructor() {
  }

}
