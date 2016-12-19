// the polyfills must be the first thing imported
import 'angular2-universal-polyfills';
import 'ts-helpers';
import './hooks/__workaround.browser'; // temporary until 2.1.1 things are patched in Core

import { enableProdMode } from '@angular/core';
import { platformUniversalDynamic } from 'angular2-universal/browser';

import { MainModule } from './browser.module';

import apiConfig from './environtments/dev';

export function main() {
  const platformRef = platformUniversalDynamic([{ provide: 'ApiConfig', useValue: apiConfig }]);

  return platformRef.bootstrapModule(MainModule);
}

main();
