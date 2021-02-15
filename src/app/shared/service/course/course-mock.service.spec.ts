import { TestBed } from '@angular/core/testing';

import { CourseMockService } from './course-mock.service';

describe('CourseMockService', () => {
  let service: CourseMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
