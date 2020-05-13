import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

export class ServerElementComponent
  implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() element: {
    type: string,
    name: string,
    content: string
  };

  constructor() {
    console.log('server-element component constructor logged.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('server-element component ngOnChanges logged.');
    console.log(changes);
  }


  ngOnInit(): void {
    console.log('server-element component ngOnInit logged.');
  }

  ngDoCheck(): void {
    console.log('server-element component ngDoCheck logged.');
  }

  ngAfterContentInit(): void {
    console.log('server-element component ngAfterContentInit logged.');
  }

  ngAfterContentChecked(): void {
    console.log('server-element component ngAfterContentChecked logged.');
  }

  ngAfterViewInit(): void {
    console.log('server-element component ngAfterViewInit logged.');
  }

  ngAfterViewChecked(): void {
    console.log('server-element component ngAfterViewChecked logged.');
  }

  ngOnDestroy(): void {
    console.log('server-element component ngOnDestroy logged.');
  }
}
