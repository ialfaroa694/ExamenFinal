import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListPagesComponent } from './course-list-pages.component';

describe('CourseListPagesComponent', () => {
  let component: CourseListPagesComponent;
  let fixture: ComponentFixture<CourseListPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
