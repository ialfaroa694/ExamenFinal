import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCreatePagesComponent } from './course-create-pages.component';

describe('CourseCreatePagesComponent', () => {
  let component: CourseCreatePagesComponent;
  let fixture: ComponentFixture<CourseCreatePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCreatePagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCreatePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
