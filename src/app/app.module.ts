import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProjectTileComponent } from './components/project-tile/project-tile.component';
import { ProjectDetailsPageComponent } from './pages/project-details-page/project-details-page.component';
import { BackgroundService } from './background.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BlogPageComponent,
    ProjectsPageComponent,
    AboutPageComponent,
    PlaygroundPageComponent,
    ProjectTileComponent,
    ProjectDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [
    BackgroundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
