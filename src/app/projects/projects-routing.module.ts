import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProjectsComponent} from './projects.component';

const routes: Routes = [
  {
    path: ':id',
    component: ProjectsComponent,
  },
  {
    path: '**', redirectTo: 'projects', pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}

