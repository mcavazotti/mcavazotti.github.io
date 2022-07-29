import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BackgroundService } from 'src/app/background.service';
import { FooterService } from 'src/app/components/footer/footer.service';
import { IArticleData, IProjectData } from 'src/app/content/content-interfaces';
import { ContentService } from 'src/app/content/content.service';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.scss']
})
export class ProjectDetailsPageComponent implements OnInit, OnDestroy {
  project?: IProjectData;
  markdown$?: Observable<string>;
  relatedArticles?: IArticleData[];

  loadError: boolean = false;



  constructor(private bgService: BackgroundService, private content: ContentService, private route: ActivatedRoute, private router: Router, private footerService: FooterService) {
  }
  
  ngOnInit(): void {
    this.footerService.showBorder();
    this.bgService.darkState(true);

    this.route.paramMap.subscribe((params) => {
      let id = params.get("id")!;
      this.project = this.content.getProject(id);
      this.relatedArticles = this.content.getRelatedArticles(id).sort((a,b)=> a.date.localeCompare(b.date));

      if(!this.project) {
        this.loadError = true;
        return;
      }
      console.log(this.loadError)

      this.markdown$ = this.content.getMarkdown(this.project.path);
    });
  }

  ngOnDestroy(): void {
    this.bgService.darkState(false);
    this.footerService.hideBorder();
  }

  navigate(id: string) {
    this.router.navigate(["blog", id]);
  }

}
