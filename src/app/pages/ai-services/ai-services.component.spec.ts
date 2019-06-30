import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiServicesComponent } from './ai-services.component';

describe('AiServicesComponent', () => {
  let component: AiServicesComponent;
  let fixture: ComponentFixture<AiServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
