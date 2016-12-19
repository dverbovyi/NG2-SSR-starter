import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AboutComponent } from './about.component';

const TITLE: string = 'About Component';

describe('#About page', () => {
    let fixture: ComponentFixture<AboutComponent>,
        instance: AboutComponent,
        el: HTMLElement;

    beforeEach(async(() => {
        return TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [AboutComponent]
        }).compileComponents().then(()=> {
            fixture = TestBed.createComponent(AboutComponent);
            fixture.detectChanges();
            instance = fixture.debugElement.componentInstance;
            el = fixture.debugElement.nativeElement;
        });
    }));

    it('should create the about page', () => {
        expect(instance).toBeTruthy();
    });

    it('should has a title', () => {
        expect(instance.title).toEqual(TITLE);
    });

    it('should render title', () => {
        expect(el.querySelector('h3').textContent).toContain(TITLE);
    });
});
