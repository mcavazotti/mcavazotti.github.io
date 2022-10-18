import { AfterViewChecked, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { firstValueFrom } from 'rxjs';
import { HighlightService } from 'src/app/helper-functions/highlight.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit, AfterViewChecked  {

  article?: ScullyRoute;
  
  constructor(private scully: ScullyRoutesService, private titleService:Title, private highlightService: HighlightService) {

  }

  async ngOnInit() {
    this.article = await firstValueFrom(this.scully.getCurrent());
    this.titleService.setTitle(this.article.title! + ' - Blog');
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

}
