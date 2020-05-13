import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Server3Component } from './server3.component';

describe('Server3Component', () => {
  let component: Server3Component;
  let fixture: ComponentFixture<Server3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Server3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Server3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
