// the polyfills must be the first thing imported
import 'angular2-universal-polyfills';
import 'ts-helpers';
import './hooks/__workaround.browser'; // temporary until 2.1.1 things are patched in Core

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { MainModuleNgFactory } from '../aot/src/browser.module.ngfactory';

import apiConfig from './environtments/prod';

export function main() {
  enableProdMode();

  const platformRef = platformBrowser([{ provide: 'ApiConfig', useValue: apiConfig }]);

  return platformRef.bootstrapModuleFactory(MainModuleNgFactory);
}

main();
