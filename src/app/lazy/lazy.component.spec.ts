import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LazyComponent } from './lazy.component';

const TITLE: string = 'This component is lazy loaded';

describe('#Lazy load page', () => {
    let fixture: ComponentFixture<LazyComponent>,
        instance: LazyComponent,
        el: HTMLElement;

    beforeEach(async(() => {
        return TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [LazyComponent]
        }).compileComponents().then(()=> {
            fixture = TestBed.createComponent(LazyComponent);
            fixture.detectChanges();
            instance = fixture.debugElement.componentInstance;
            el = fixture.debugElement.nativeElement;
        });
    }));

    it('should create the lazy load page', () => {
        expect(instance).toBeTruthy();
    });

    it('should has a title property', () => {
        expect(instance.title).toEqual(TITLE);
    });

    it('should render title a title', () => {
        expect(el.querySelector('h3').textContent).toContain(TITLE);
    });
});
