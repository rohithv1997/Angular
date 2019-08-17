import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNgforComponent } from './server-ngfor.component';

describe('ServerNgforComponent', () => {
  let component: ServerNgforComponent;
  let fixture: ComponentFixture<ServerNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
