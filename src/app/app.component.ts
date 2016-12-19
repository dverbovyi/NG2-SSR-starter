import { Component, Directive, ElementRef, Renderer, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public header: string = 'Welcome dudes!'
  public title = 'type something';
}
