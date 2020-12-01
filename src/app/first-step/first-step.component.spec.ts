import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepComponent } from './first-step.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('FirstStepComponent', () => {
  let component: FirstStepComponent;
  let fixture: ComponentFixture<FirstStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStepComponent ],
      imports: [
        RouterModule.forRoot([]),
        HttpClientModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
