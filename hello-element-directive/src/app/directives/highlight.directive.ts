import { Directive, HostBinding, OnInit, HostListener, Input, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  wasHighlighted = false;

  @Input('appHighlight')
  color: string;

  @Output()
  triggered = new EventEmitter<string>();

  // we use HostBinding to send data from the directive to the host
  @HostBinding('style.background-color')
  background: string = '';

  // we use HostListener to send data from the host to the directive
  @HostListener('mouseenter')
  setColor() {
      let finalColor = this.color ? this.color : 'yellow';

    this.background = finalColor;
    if (!this.wasHighlighted) {
      this.wasHighlighted = true;
      this.triggered.emit(this.color);
    }
  }

  @HostListener('mouseleave')
  restoreColor() {
    this.background = '';
  }

  ngOnInit(): void {
  }

}
