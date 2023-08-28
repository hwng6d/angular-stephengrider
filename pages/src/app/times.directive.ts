import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

// Structural Directive

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) { }
  
  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, { // Context of Structural Directive
        index: i,
        color: 'red',
      });
    }
  }
}
