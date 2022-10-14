import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {

  article?: ScullyRoute;
  
  constructor(private scully: ScullyRoutesService, private titleService:Title, private meta: Meta) {

  }

  async ngOnInit() {
    this.article = await firstValueFrom(this.scully.getCurrent());
    if(!this.article['cover'])
    this.article['cover'] = `assets/covers/generated/${this.article.route.split('/').pop()}.png`;

    this.titleService.setTitle(this.article.title! + ' - Blog');
    this.meta.addTags([
      {name:'description',content: this.article['description']},
      {property:'og:type',content: 'article'},
      {property:'og:image',content: this.article['cover']},
    
    ]);
  }

}
