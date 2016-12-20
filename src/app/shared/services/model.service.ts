import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';

import { CacheService } from './cache.service';
import { ApiService } from './api.service';

@Injectable()
export class ModelService {
    constructor(public api: ApiService, public cache: CacheService) {}

    get(url) {
        let key = url;

        if (this.cache.has(key))
            return Observable.of(this.cache.get(key));

        return this.api.get(url)
            .do(json => {
                this.cache.set(key, json);
            })
            .share();
    }
}
