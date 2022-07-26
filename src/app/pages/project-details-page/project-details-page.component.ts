import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BackgroundService } from 'src/app/background.service';
import { IProjectData } from 'src/app/content/content-interfaces';
import { ContentService } from 'src/app/content/content.service';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.scss']
})
export class ProjectDetailsPageComponent implements OnInit, OnDestroy {
  project?: IProjectData;
  markdown$?: Observable<string>;

  loadError: boolean = false;



  constructor(private bgService: BackgroundService, private content: ContentService, private route: ActivatedRoute) {
    bgService.darkState(true);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get("id")!;
      this.project = this.content.getProject(id);

      if(!this.project) {
        console.log("aqui")
        this.loadError = true;
        return;
      }
      console.log(this.loadError)

      this.markdown$ = this.content.getMarkdown(this.project.path);
    });
  }

  ngOnDestroy(): void {
    this.bgService.darkState(false);
  }

}
