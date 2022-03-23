import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageHeroComponent } from './main-page-content/main-page-hero/main-page-hero.component';
import { MainPageSection1Component } from './main-page-content/main-page-section1/main-page-section1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageContentComponent,
    FooterComponent,
    MainPageHeroComponent,
    MainPageSection1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
