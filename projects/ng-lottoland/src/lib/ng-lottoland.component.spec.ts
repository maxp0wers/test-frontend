import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLottolandComponent } from './ng-lottoland.component';

describe('NgLottolandComponent', () => {
  let component: NgLottolandComponent;
  let fixture: ComponentFixture<NgLottolandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLottolandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLottolandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
