import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { PlaygroundPageComponent } from './playground-page/playground-page.component';

const routes: Routes = [
  { path: 'planets', title: 'Planets', component: PlanetsComponent },
  { path: '', title: 'Playground', component: PlaygroundPageComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }
