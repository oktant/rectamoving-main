import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppIntroComponent } from './app-intro/app-intro.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppContentComponent,
    AppFooterComponent,
    AppIntroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
