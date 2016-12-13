import { Component } from '@angular/core';

@Component({
  template: require('./no-content.component.html')
})
export class NoContentComponent {
  public title: string = 'Page not found';
}
