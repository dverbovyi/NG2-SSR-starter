import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'about',
  template: '<h3>{{title}}</h3>'
})
export class AboutComponent {
  public title: string = 'About Component';
}
