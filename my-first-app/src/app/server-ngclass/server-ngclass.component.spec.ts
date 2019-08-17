import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNgclassComponent } from './server-ngclass.component';

describe('ServerNgclassComponent', () => {
  let component: ServerNgclassComponent;
  let fixture: ComponentFixture<ServerNgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerNgclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
