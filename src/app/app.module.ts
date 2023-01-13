import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GettingStartedComponent } from './views/getting-started/getting-started.component';
import { UsageComponent } from './views/usage/usage.component';
import { ConfigOverridesComponent } from './views/config-overrides/config-overrides.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GettingStartedComponent,
    UsageComponent,
    ConfigOverridesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
