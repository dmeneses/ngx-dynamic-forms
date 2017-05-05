import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[attributeSetter]'
})
export class AttributeSetterDirective implements OnInit {
  @Input('attributeSetter') attributes: string[];
  element: ElementRef;
  constructor(el: ElementRef) { 
    this.element = el;
  }

  ngOnInit() {
    Object.assign(this.element.nativeElement, this.attributes);
  }
}
