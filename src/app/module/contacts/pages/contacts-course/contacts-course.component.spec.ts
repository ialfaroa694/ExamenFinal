import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsCourseComponent } from './contacts-course.component';

describe('ContactsCourseComponent', () => {
  let component: ContactsCourseComponent;
  let fixture: ComponentFixture<ContactsCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
