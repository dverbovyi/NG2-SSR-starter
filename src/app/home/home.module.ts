import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

import { AppProviders } from './app.providers';

@NgModule({
  declarations: [ HomeComponent ],
  providers: [],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}

