import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective {
  private _items: any[] = [];
  @Input('appForRepeat') set items(value: any[]) {
    this._items = value;    
    this.reset();
  }

  reset() {
    this.viewContainer.clear();
    if (this._items) {
      let counter = 0;
      for (const item of this._items) {
        let even = (counter % 2 === 0);
        let context = {$implicit: item, counter: counter, even: even};
        this.viewContainer.createEmbeddedView(this.templateRef, context);
        counter++;
      }
    }
  }

  constructor(
    private templateRef: TemplateRef<any>, 
    private viewContainer: ViewContainerRef
  ) { }

}
