import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutPageComponent } from './about-page/about-page.component';
import { PlaygroundPageComponent } from './playground-page/playground-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    PlaygroundPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class PagesModule { }
