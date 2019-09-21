import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledSalonViewComponent } from './enrolledsalon-view.component';

describe('EnrolledSalonViewComponent', () => {
  let component: EnrolledSalonViewComponent;
  let fixture: ComponentFixture<EnrolledSalonViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ EnrolledSalonViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledSalonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
