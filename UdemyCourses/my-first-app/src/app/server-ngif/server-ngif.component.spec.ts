import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNgifComponent } from './server-ngif.component';

describe('ServerNgifComponent', () => {
  let component: ServerNgifComponent;
  let fixture: ComponentFixture<ServerNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
