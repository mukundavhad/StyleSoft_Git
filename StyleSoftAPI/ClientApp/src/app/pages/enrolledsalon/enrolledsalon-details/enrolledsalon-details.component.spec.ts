import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledSalonDetailsComponent } from './enrolledsalon-details.component';

describe('EnrolledSalonDetailsComponent', () => {
  let component: EnrolledSalonDetailsComponent;
  let fixture: ComponentFixture<EnrolledSalonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolledSalonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledSalonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
