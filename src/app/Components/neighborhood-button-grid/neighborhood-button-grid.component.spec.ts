import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighborhoodButtonGridComponent } from './neighborhood-button-grid.component';

describe('NeighborhoodButtonGridComponent', () => {
  let component: NeighborhoodButtonGridComponent;
  let fixture: ComponentFixture<NeighborhoodButtonGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeighborhoodButtonGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeighborhoodButtonGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
