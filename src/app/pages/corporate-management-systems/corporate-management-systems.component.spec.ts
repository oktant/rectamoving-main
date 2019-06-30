import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateManagementSystemsComponent } from './corporate-management-systems.component';

describe('CorporateManagementSystemsComponent', () => {
  let component: CorporateManagementSystemsComponent;
  let fixture: ComponentFixture<CorporateManagementSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateManagementSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateManagementSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
