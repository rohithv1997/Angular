import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerEventBindingComponent } from './server-event-binding.component';

describe('ServerEventBindingComponent', () => {
  let component: ServerEventBindingComponent;
  let fixture: ComponentFixture<ServerEventBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerEventBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
