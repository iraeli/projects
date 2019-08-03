import { Directive, HostBinding, Input, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appIsValid]'
})
export class IsValidDirective {

  constructor() { }

  @Output()
  isValid = new EventEmitter<boolean>();
  
  @Input('text') 
  text: string;

  @HostListener('keyup')
  setValidation() {
   if(this.text.length >= 10)
      this.isValid.emit(false);
  }

}
