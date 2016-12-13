import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { DEV, PROD } from '../environments';

// Environment Providers
export const AppProviders: any[] = [];

if ('production' === ENV) {
  // Production
  disableDebugTools();
  enableProdMode();

  AppProviders.push(
    { provide: 'EnvAPIConfig', useValue: PROD }
  );

} else {
  // Development
  AppProviders.push(
    { provide: 'EnvAPIConfig', useValue: DEV }
  )
  // custom providers in development
}