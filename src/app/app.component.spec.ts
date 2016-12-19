import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

const HEADER: string = 'Welcome dudes!';

describe('#AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>,
        instance: AppComponent,
        el: HTMLElement;

    beforeEach(async(() => {
        return TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [AppComponent]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();
            instance = fixture.debugElement.componentInstance;
            el = fixture.debugElement.nativeElement;
        });
    }));

    it('should create the app', () => {
        expect(instance).toBeTruthy();
    });

    it('should has a header', () => {
        expect(instance.header).toEqual(HEADER);
    });

    it('should render a header', () => {
        expect(el.querySelector('h1').textContent).toContain(HEADER);
    });

    it('should render router-outlet', () => {
        expect(el.querySelector('router-outlet')).toBeTruthy();
    });
});
