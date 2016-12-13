import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NoContentComponent } from './components/no-content';
import { APIService, ConfigService, Helpers } from './services';

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  BrowserModule,
  ReactiveFormsModule,
  HttpModule
];

const PIPES = [
  // put pipes here
];

const COMPONENTS = [
    NoContentComponent
];

const PROVIDERS = [
  APIService,
  ConfigService,
  Helpers
]

@NgModule({
  imports: [],
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ],
  exports: [
    ...MODULES
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...PROVIDERS
      ]
    }
  }
}