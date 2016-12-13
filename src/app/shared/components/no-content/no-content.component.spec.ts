/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NoContentComponent } from './no-content.component';

const TITLE: string = 'Page not found';

describe('#Not found page', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NoContentComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the 404 page', async(() => {
    let fixture = TestBed.createComponent(NoContentComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should has a title', async(() => {
    let fixture = TestBed.createComponent(NoContentComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(TITLE);
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(NoContentComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(TITLE);
  }));
});
