/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';

const TITLE: string = 'Welcome! App works!';

describe('#Home page', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent
            ],
        });
        TestBed.compileComponents();
    });

    it('should create the home page', async(() => {
        let fixture = TestBed.createComponent(HomeComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should has a title', async(() => {
        let fixture = TestBed.createComponent(HomeComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual(TITLE);
    }));

    it('should render title in a h1 tag', async(() => {
        let fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain(TITLE);
    }));
});
