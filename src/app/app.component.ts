import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-root',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')]
})
export class AppComponent {}
