import { Unsubscriber } from './unsubscriber';

describe('#Unsubscriber mixin', () => {
    let unsubscriber: Unsubscriber;

    beforeEach(() => {
        unsubscriber = new Unsubscriber();
    });

    it('Should implement OnDestroy interface', () => {
        expect(unsubscriber.ngOnDestroy).toEqual(jasmine.any(Function));
    });
});
