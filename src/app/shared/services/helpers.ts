import { Injectable } from '@angular/core';

@Injectable()
export class Helpers {
    constructor() { }

    public isJSON(str: string) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }

        return true;
    }

    public overwriteConsoleOutput(): void {
        const console: Object = window.console,
            noop: Function = () => { };

        for (const key in console) {
            if (!console.hasOwnProperty(key))
                continue;

            console[key] = noop;
        }
    }
}