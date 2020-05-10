import { Directive, OnInit, Renderer2, ElementRef, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[appAdvanceHighlight]'
})
export class AdvanceHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue', RendererStyleFlags2.Important);
  }
}
