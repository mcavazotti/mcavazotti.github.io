import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslationService } from './services/translation.service';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideNavService } from './services/side-nav.service';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    NavbarComponent,
    FooterComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [TranslationService, SideNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
