import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  private hasView: boolean = false;


  @Input('appIf') set condition(value: boolean) {
    if (value && !this.hasView) {
      // if the value is true, but we do not have an instance of the template
      // create a new instance of the template
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!value && this.hasView) {
      // if the value is false, but we DO have an instance of the template, 
      // clear it
      this.viewContainer.clear();
    }

    this.hasView = value;
  }


  constructor(
    private templateRef: TemplateRef<any>, 
    private viewContainer: ViewContainerRef) { }

}
