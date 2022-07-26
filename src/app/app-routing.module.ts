import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';
import { ProjectDetailsPageComponent } from './pages/project-details-page/project-details-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

const routes: Routes = [
  {path:"home", component: HomePageComponent},
  {path:"blog", component: BlogPageComponent},
  {path:"projects", component: ProjectsPageComponent},
  {path:"projects/:id", component: ProjectDetailsPageComponent},
  {path:"about", component: AboutPageComponent},
  {path:"playground", component: PlaygroundPageComponent},
  {path:"", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
