import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNgStyleComponent } from './server-ng-style.component';

describe('ServerNgStyleComponent', () => {
  let component: ServerNgStyleComponent;
  let fixture: ComponentFixture<ServerNgStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerNgStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
