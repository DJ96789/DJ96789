import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectButtonGridComponent } from './subject-button-grid.component';

describe('SubjectButtonGridComponent', () => {
  let component: SubjectButtonGridComponent;
  let fixture: ComponentFixture<SubjectButtonGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectButtonGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectButtonGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
