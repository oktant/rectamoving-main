import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppIntroComponent } from './app-intro/app-intro.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {AppRouting} from './app-routing';
import { ProductsComponent } from './pages/products/products.component';
import { AiServicesComponent } from './pages/ai-services/ai-services.component';
import { CorporateManagementSystemsComponent } from './pages/corporate-management-systems/corporate-management-systems.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppIntroComponent,
    ContactComponent,
    DashboardComponent,
    ProductsComponent,
    AiServicesComponent,
    CorporateManagementSystemsComponent,
    AboutUsComponent,

  ],
  imports: [
    BrowserModule, AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
