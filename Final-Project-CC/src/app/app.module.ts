import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RoutingComponent } from './routing/routing/routing.component';
import { OverviewComponent } from './components/dash/overview/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    RoutingComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
