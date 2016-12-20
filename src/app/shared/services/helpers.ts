import { Injectable } from '@angular/core';

@Injectable()
export class Helpers {
    public isJSON(str: string) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }

        return true;
    }
}

export function getLRUCache() {
    return new Map();
}