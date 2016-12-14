import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { DEV, PROD } from '../environments';

export const AppProviders: any[] = [];

if ('production' === ENV) {
  disableDebugTools();
  enableProdMode();

  AppProviders.push(
    { provide: 'EnvAPIConfig', useValue: PROD }
  );

} else {
  AppProviders.push(
    { provide: 'EnvAPIConfig', useValue: DEV }
  )
  // custom providers in development
}