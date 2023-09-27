import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {ProjectsRoutingModule} from './projects-routing.module';
import {ProjectsComponent} from './projects.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, ScullyLibModule, ComponentsModule],
})
export class ProjectsModule {}
