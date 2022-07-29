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
import { ContentService } from './content/content.service';
import { FilterComponent } from './components/filter/filter.component';
import { ArticleTileComponent } from './components/article-tile/article-tile.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { FooterService } from './components/footer/footer.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BlogPageComponent,
    ProjectsPageComponent,
    AboutPageComponent,
    PlaygroundPageComponent,
    ProjectTileComponent,
    ProjectDetailsPageComponent,
    FilterComponent,
    ArticleTileComponent,
    ArticlePageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    FontAwesomeModule
  ],
  providers: [
    BackgroundService,
    ContentService,
    FooterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
