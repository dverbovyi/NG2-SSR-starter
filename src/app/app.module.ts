import { NgModule } from '@angular/core';

import { HomeModule } from './home';
import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppProviders } from './app.providers';

@NgModule({
  declarations: [ AppComponent ],
  providers: [
    ...AppProviders
  ],
  imports: [
    SharedModule,
    HomeModule,
    AppRoutingModule,
    SharedModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export * from './shared/services/config.service';

