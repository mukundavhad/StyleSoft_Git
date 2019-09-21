import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaloonViewComponent } from './saloon-view.component';

describe('SaloonViewComponent', () => {
  let component: SaloonViewComponent;
  let fixture: ComponentFixture<SaloonViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaloonViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaloonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
