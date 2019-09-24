import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCategoryViewComponent } from './servicecategory-view.component';

describe('ServiceCategoryViewComponent', () => {
  let component: ServiceCategoryViewComponent;
  let fixture: ComponentFixture<ServiceCategoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ ServiceCategoryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
