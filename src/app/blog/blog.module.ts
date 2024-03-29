import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog-page/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ScullyLibModule,
    ComponentsModule
  ],
})
export class BlogModule { }
