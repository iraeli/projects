import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDisappear]'
})
export class DisappearDirective {

  constructor() { }
  @Input('delay')
  delay: number = 0;

  @HostBinding('style.display')
  display: string = 'block';

  @HostListener('click')
  setDisplayStyle() {
    this.display = 'none';
    setTimeout(() => {
      this.display = 'block';
    }, this.delay);
  }




}
