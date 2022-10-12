import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';

import { BlogComponent } from './blog-page/blog.component';

const routes: Routes = [
  {
    path: '', title: 'Blog',
    component: BlogListComponent,
  },
  {
    path: ':slug', 
    component: BlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule { }

