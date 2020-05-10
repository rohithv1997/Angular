import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  RendererStyleFlags2,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appAdvanceHighlight]'
})
export class AdvanceHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input() defaultColor: string;
  @Input() highlightColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.defaultColor = 'transparent';
    this.highlightColor = 'lightblue';
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightgreen', RendererStyleFlags2.DashCase);
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
