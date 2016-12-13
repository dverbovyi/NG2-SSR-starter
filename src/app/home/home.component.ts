import { Component } from '@angular/core';

@Component({
    template: require('./home.component.html')
})
export class HomeComponent {
    public title: string = 'Welcome! App works!';
}
