import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home',
  template: '<h3>{{title}}</h3>'
})
export class HomeComponent {
  public title: string = 'Home Component';
}