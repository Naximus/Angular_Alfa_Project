import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageHeroComponent } from './main-page-content/main-page-hero/main-page-hero.component';
import { MainPageSection1Component } from './main-page-content/main-page-section1/main-page-section1.component';
import { MainPageSection2Component } from './main-page-content/main-page-section2/main-page-section2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TrainingsPageComponent } from './trainings-page/trainings-page.component';
import { CoachsPageComponent } from './coachs-page/coachs-page.component';
import { PersonalTreningPageComponent } from './trainings-page/personal-trening-page/personal-trening-page.component';
import { GroupTreningPageComponent } from './trainings-page/group-trening-page/group-trening-page.component';
import { AtleticTreningPageComponent } from './trainings-page/atletic-trening-page/atletic-trening-page.component';
import { KidsTreningPageComponent } from './trainings-page/kids-trening-page/kids-trening-page.component';
import { StoyanPageComponent } from './trainings-page/personal-trening-page/stoyan-page/stoyan-page.component';
import { SteliPageComponent } from './trainings-page/personal-trening-page/steli-page/steli-page.component';
import { ViliPageComponent } from './trainings-page/personal-trening-page/vili-page/vili-page.component';
import { NikiPageComponent } from './trainings-page/personal-trening-page/niki-page/niki-page.component';
import { PumpPageComponent } from './trainings-page/group-trening-page/pump-page/pump-page.component';
import { TabataPageComponent } from './trainings-page/group-trening-page/tabata-page/tabata-page.component';
import { DancePageComponent } from './trainings-page/group-trening-page/dance-page/dance-page.component';
import { UserPageComponent } from './profile-page/user-page/user-page.component';
// import { MaterialModule } from 'src/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageContentComponent,
    FooterComponent,
    MainPageHeroComponent,
    MainPageSection1Component,
    MainPageSection2Component,
    ProfilePageComponent,
    ContactPageComponent,
    TrainingsPageComponent,
    CoachsPageComponent,
    PersonalTreningPageComponent,
    GroupTreningPageComponent,
    AtleticTreningPageComponent,
    KidsTreningPageComponent,
    StoyanPageComponent,
    SteliPageComponent,
    ViliPageComponent,
    NikiPageComponent,
    PumpPageComponent,
    TabataPageComponent,
    DancePageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule
    // MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
