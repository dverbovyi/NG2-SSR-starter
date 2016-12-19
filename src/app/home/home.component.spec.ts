import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home.component';

const TITLE: string = 'Home Component';

describe('#Home page', () => {
    let fixture: ComponentFixture<HomeComponent>,
        instance: HomeComponent,
        el: HTMLElement;

    beforeEach(async(() => {
        return TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [HomeComponent]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(HomeComponent);
            fixture.detectChanges();
            instance = fixture.debugElement.componentInstance;
            el = fixture.debugElement.nativeElement;
        });
    }));

    it('should create the home page', () => {
        expect(instance).toBeTruthy();
    });

    it('should has a title', () => {
        expect(instance.title).toEqual(TITLE);
    });

    it('should render title', () => {
        expect(el.querySelector('h3').textContent).toContain(TITLE);
    });
});
