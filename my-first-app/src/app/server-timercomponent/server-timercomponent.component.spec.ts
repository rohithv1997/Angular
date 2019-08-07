import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTimercomponentComponent } from './server-timercomponent.component';

describe('ServerTimercomponentComponent', () => {
  let component: ServerTimercomponentComponent;
  let fixture: ComponentFixture<ServerTimercomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerTimercomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerTimercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
