import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerStringinterpolationComponent } from './server-stringinterpolation.component';

describe('ServerStringinterpolationComponent', () => {
  let component: ServerStringinterpolationComponent;
  let fixture: ComponentFixture<ServerStringinterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerStringinterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerStringinterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
