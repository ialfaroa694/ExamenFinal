import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditPagesComponent } from './course-edit-pages.component';

describe('CourseEditPagesComponent', () => {
  let component: CourseEditPagesComponent;
  let fixture: ComponentFixture<CourseEditPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseEditPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
