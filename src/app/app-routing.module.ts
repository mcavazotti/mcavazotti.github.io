import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { LiveViewPageComponent } from './components/live-view-page/live-view-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';

const appRoutes: Routes = [
  {path:'about', component: AboutPageComponent},
  {path:'projects', component: ProjectsPageComponent},
  {path:'live', component: LiveViewPageComponent},
  {path:'projects/:id', component: DetailPageComponent},
  {path:'main', component: MainPageComponent},
  {path:'404', component: NotFoundComponent},
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: '**', redirectTo: '404', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
