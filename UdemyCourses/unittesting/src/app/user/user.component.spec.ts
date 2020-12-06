import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { DataService } from '../shared/data.service';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should use the username from UserService', () => {
    const userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('should display the user name when the user is logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      component.user.name
    );
  });

  it('should not display the user name when the user is logged in', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(
      component.user.name
    );
  });

  it('should not fetch data successfully if not called asynchronously', () => {
    const dataService = fixture.debugElement.injector.get(DataService);
    const spy = spyOnProperty(dataService, 'Details', 'get').and.returnValue(
      Promise.resolve('Data')
    );
    fixture.detectChanges();
    expect(component.data).toBe(undefined);
  });

  it('should fetch data successfully if called asynchronously', waitForAsync(() => {
      const dataService = fixture.debugElement.injector.get(DataService);
      const spy = spyOnProperty(dataService, 'Details', 'get').and.returnValue(
        Promise.resolve('Data')
      );
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.data).toBe('Data');
      });
    })
  );

  it('should fetch data successfully if called fake asynchronously', fakeAsync(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    const dataService = fixture.debugElement.injector.get(DataService);
    const spy = spyOnProperty(dataService, 'Details', 'get').and.returnValue(
      Promise.resolve('Data')
    );
    fixture.detectChanges();
    tick(1500);
    expect(component.data).toBe('Data');
  }));

});
