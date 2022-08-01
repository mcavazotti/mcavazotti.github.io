import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BackgroundService } from 'src/app/background.service';
import { FooterService } from 'src/app/components/footer/footer.service';
import { IArticleData } from 'src/app/content/content-interfaces';
import { ContentService } from 'src/app/content/content.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  article?: IArticleData;
  markdown$?: Observable<string>;

  loadError: boolean = false;



  constructor(private bgService: BackgroundService, private content: ContentService, private route: ActivatedRoute, private footerService: FooterService) {
  }

  ngOnInit(): void {
    this.bgService.darkState(true);
    this.footerService.showBorder();

    this.route.paramMap.subscribe((params) => {
      let id = params.get("id")!;
      this.article = this.content.getArticle(id);

      if (!this.article) {
        this.loadError = true;
        return;
      }
      console.log(this.loadError)

      this.markdown$ = this.content.getMarkdown(this.article.path);
    });
  }

  ngOnDestroy(): void {
    this.bgService.darkState(false);
    this.footerService.hideBorder();
  }

  formatDate(date: string): string {
    if (date.length < 8) throw Error("invalid date format");
    let year = Number.parseInt(date.substring(0, 4));
    let month = Number.parseInt(date.substring(4, 6));
    let day = Number.parseInt(date.substring(6));

    let fullDate = new Date(year, month - 1, day);

    return fullDate.toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" })
  }

}
