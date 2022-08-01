import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArticleData } from 'src/app/content/content-interfaces';
import { ContentService } from 'src/app/content/content.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  articles: IArticleData[];
  filteredArticles: IArticleData[];
  tags: string[];

  constructor(private router: Router, private contentService: ContentService) {

    this.articles = contentService.getArticles().sort((a,b) => a.date.localeCompare(b.date) )
    this.filteredArticles = [...this.articles];
    this.tags = Array.from(new Set(this.articles.map((a) => a.tags.map((t) => t.toLowerCase())).reduce((prev, current) => [...prev, ...current])));
   }

  ngOnInit(): void {
  }

  navigate(id: string) {
    this.router.navigate(["blog", id]);
  }

  filterArticles(activeTags: string[]) {
    this.filteredArticles = this.articles.filter((a) => {
      for (const t of a.tags) {
        if (activeTags.includes(t)) {
          return true;
        }
      }
      return false;
    });
  }

}
