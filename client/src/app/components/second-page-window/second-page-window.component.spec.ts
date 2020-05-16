import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageWindowComponent } from './second-page-window.component';

describe('SecondPageWindowComponent', () => {
  let component: SecondPageWindowComponent;
  let fixture: ComponentFixture<SecondPageWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPageWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPageWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
