import { Observable } from 'rxjs';
import { ICourseContainer } from './course';

export interface ICourseService {
    getCourses(): Observable<ICourseContainer[]>;
}
