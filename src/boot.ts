import { ReflectiveInjector, ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule, ConfigService } from './app';

import './assets/styles/global.scss';

function RunApplication(): void {

  const injector = ReflectiveInjector.resolveAndCreate([, ConfigService]),
    service = injector.get(ConfigService);

  service.load()
    .then((config: any) => {
      platformBrowserDynamic([{ provide: 'APIConfig', useValue: config }]).bootstrapModule(AppModule);
    })
    .catch(console.error);
}

RunApplication();