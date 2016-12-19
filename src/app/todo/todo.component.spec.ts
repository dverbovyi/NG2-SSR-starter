import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TodoComponent } from './todo.component';
import { ApiService } from '../shared/services';

const TITLE: string = 'TODO component with prerender server data';

const apiServiceStub = {
    get: (resource: string) => {
        return Observable.create((observer) => observer.complete());
    }
}

describe('#Todo page', () => {
    let fixture: ComponentFixture<TodoComponent>,
        instance: TodoComponent,
        el: HTMLElement;

    beforeEach(async(() => {
        return TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [TodoComponent],
            providers: [{ provide: ApiService, useValue: apiServiceStub }]
        }).compileComponents().then(()=> {
            fixture = TestBed.createComponent(TodoComponent);
            fixture.detectChanges();
            instance = fixture.debugElement.componentInstance;
            el = fixture.debugElement.nativeElement;
        });
    }));

    it('should create the todo page', () => {
        expect(instance).toBeTruthy();
    });

    it('should has a title', () => {
        expect(instance.title).toEqual(TITLE);
    });

    it('should render title a title', () => {
        expect(el.querySelector('h3').textContent).toContain(TITLE);
    });
});
