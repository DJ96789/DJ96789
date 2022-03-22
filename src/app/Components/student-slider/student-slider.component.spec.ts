import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSliderComponent } from './student-slider.component';

describe('StudentSliderComponent', () => {
  let component: StudentSliderComponent;
  let fixture: ComponentFixture<StudentSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
