import { ReflectiveInjector, ApplicationRef } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

import { ConfigService } from './app';

function RunApplication(): void {

  const injector = ReflectiveInjector.resolveAndCreate([, ConfigService]),
    service = injector.get(ConfigService);

  service.load()
    .then((config: any) => {
      platformBrowser([{ provide: 'APIConfig', useValue: config }]).bootstrapModuleFactory(AppModuleNgFactory);
    })
    .catch(console.error);
}

RunApplication();