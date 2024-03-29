import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// used to create fake backend
import { FakeBackendProvider } from './shared/mocks/fake-backend-interceptor';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ConfigService } from './shared/config.service';

/* Module Imports */
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { ShellModule } from './shell/shell.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    PagesModule,
    AppRoutingModule,
    ShellModule,
    SharedModule
  ],
  providers: [
    ConfigService,
    // provider used to create fake backend
    FakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
