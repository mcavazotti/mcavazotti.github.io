import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map, Observable } from 'rxjs';
import { filterPostRoutes } from 'src/app/helper-functions/filters';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  posts$: Observable<ScullyRoute[]>;
  constructor(private scully: ScullyRoutesService) {
    this.posts$ = scully.available$.pipe(
      map((links) => links.filter(filterPostRoutes('blog')).map((link) => {
        if (link['date']) {
          link['date'] = new Date(link['date']);
        }
        if (!link['cover']) {
          link['cover'] = `assets/covers/generated/${link.route.split('/').pop()}.png`;
        }
        return link;
      }).sort((a, b) => (b['date'] as Date).getTime() - (a['date'] as Date).getTime())
      )
    );
  }

  ngOnInit(): void {
    this.posts$.subscribe((links) => {
      console.log(links);
    });
  }

}
