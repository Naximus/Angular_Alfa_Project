import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CoachsPageComponent } from "./coachs-page/coachs-page.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { MainPageContentComponent } from "./main-page-content/main-page-content.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";
import { TrainingsPageComponent } from "./trainings-page/trainings-page.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: 'main-page', component: MainPageContentComponent},
  {path: 'contact-page', component: ContactPageComponent},
  {path: 'profile-page', component: ProfilePageComponent},
  {path: 'training-page', component: TrainingsPageComponent},
  {path: 'coaches-page', component: CoachsPageComponent}
]

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
