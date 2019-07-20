import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMagnify]'
})
export class MagnifyDirective {
  @HostBinding('style.transform')
  transform: string = 'scale(1.0)';

  @HostBinding('style.transition')
  transition: string = '1s';

  private isMagnified = false;


  @HostListener('click')
  onclick() {
    if (this.isMagnified) {
      this.transform = 'scale(1.0)'; 
      this.isMagnified = false;
    } else {
      this.transform = 'scale(2.0)';
      this.isMagnified = true;
    }
  }


}
