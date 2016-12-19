import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lazy',
  template: '<h3>{{title}}</h3>'
})
export class LazyComponent {
  public title: string = 'This component is lazy loaded';
}
