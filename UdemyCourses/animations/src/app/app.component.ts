import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { AnimationState } from './animation.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state(
        AnimationState.Normal,
        style({
          'background-color': 'red',
          transform: 'translateX(0)',
        })
      ),
      state(
        AnimationState.Highlighted,
        style({
          'background-color': 'blue',
          transform: 'translateX(100px)',
        })
      ),
      transition(
        `${AnimationState.Normal} <=> ${AnimationState.Highlighted}`,
        animate(300)
      ),
    ]),
    trigger('wildState', [
      state(
        AnimationState.Normal,
        style({
          'background-color': 'red',
          transform: 'translateX(0) scale(1)',
        })
      ),
      state(
        AnimationState.Highlighted,
        style({
          'background-color': 'blue',
          transform: 'translateX(100px) scale(1)',
        })
      ),
      state(
        AnimationState.Shrinking,
        style({
          'background-color': 'green',
          transform: 'translateX(0) scale(0.5)',
        })
      ),
      transition(
        `${AnimationState.Normal} => ${AnimationState.Highlighted}`,
        animate(300)
      ),
      transition(
        `${AnimationState.Highlighted} => ${AnimationState.Normal}`,
        animate(800)
      ),
      transition(`${AnimationState.Shrinking} <=> *`, [
        style({
          'background-color': 'orange',
        }),
        animate(
          1000,
          style({
            borderRadius: '50px',
          })
        ),
        animate(500),
      ]),
    ]),
    trigger('list1', [
      state(
        AnimationState.In,
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(300),
      ]),
      transition('* => void', [
        animate(
          300,
          style({
            transform: 'translateX(100px)',
            opacity: 0,
          })
        ),
      ]),
    ]),
    trigger('list2', [
      state(
        AnimationState.In,
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void => *', [
        animate(
          1000,
          keyframes([
            style({
              transform: 'translateX(-100px)',
              opacity: 0,
              offset: 0,
            }),
            style({
              transform: 'translateX(-50px)',
              opacity: 0.5,
              offset: 0.3,
            }),
            style({
              transform: 'translateX(-20px)',
              opacity: 1,
              offset: 0.8,
            }),
            style({
              transform: 'translateX(0px)',
              opacity: 1,
              offset: 1,
            }),
          ])
        ),
      ]),
      transition('* => void', [
        animate(
          300,
          style({
            transform: 'translateX(100px)',
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  state = AnimationState.Normal;
  wildState = AnimationState.Normal;
  list = ['Milk', 'Sugar', 'Bread'];

  public onAdd(item: string): void {
    this.list.push(item);
  }

  public onDelete(item: string): void {
    this.list.splice(this.list.indexOf(item), 1);
  }

  public onAnimate(): void {
    switch (this.state) {
      case AnimationState.Normal:
        this.state = AnimationState.Highlighted;
        break;
      default:
        this.state = AnimationState.Normal;
    }

    switch (this.wildState) {
      case AnimationState.Normal:
        this.wildState = AnimationState.Highlighted;
        break;
      default:
        this.wildState = AnimationState.Normal;
    }
  }

  public onShrink(): void {
    this.wildState = AnimationState.Shrinking;
  }
}
