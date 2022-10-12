import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  
  constructor(private scully: ScullyRoutesService) {
  }

  async ngOnInit() {
    this.article = await firstValueFrom(this.scully.getCurrent());
  }

}
