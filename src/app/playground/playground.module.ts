import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundPageComponent } from './playground-page/playground-page.component';
import { PlanetsComponent } from './planets/planets.component';


@NgModule({
  declarations: [
    PlaygroundPageComponent,
    PlanetsComponent
  ],
  imports: [
    CommonModule,
    PlaygroundRoutingModule
  ]
})
export class PlaygroundModule { }
