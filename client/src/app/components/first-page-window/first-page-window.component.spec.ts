import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageWindowComponent } from './first-page-window.component';

describe('FirstPageWindowComponent', () => {
  let component: FirstPageWindowComponent;
  let fixture: ComponentFixture<FirstPageWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPageWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
