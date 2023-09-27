import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundPageComponent } from './playground-page/playground-page.component';
import { PlanetsComponent } from './planets/planets.component';
import { TerrainComponent } from './terrain/terrain.component';


@NgModule({
  declarations: [
    PlaygroundPageComponent,
    PlanetsComponent,
    TerrainComponent
  ],
  imports: [
    CommonModule,
    PlaygroundRoutingModule
  ]
})
export class PlaygroundModule { }
