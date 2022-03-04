import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/definitions/project.inteface';
import { TranslationHelper } from 'src/app/helpers/translation-helper';
import { ProjectsService } from 'src/app/services/projects.service';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit, OnDestroy {
  private projectTranslationHelper?: TranslationHelper;
  private pageTranslationHelper: TranslationHelper;

  @Input() id: string | null = null;

  project: Project | null = { id: '' };
  name: string = '';
  briefing: string = '';
  description: string = '';

  errorFlag: boolean = false;
  errorMessage: string = '';
  link: string = '';

  constructor(private translationService: TranslationService, private projectsService: ProjectsService, private route: ActivatedRoute, ) {
    this.pageTranslationHelper = new TranslationHelper("detail-page", translationService, (translation) => {
      this.link = translation.link;
      this.errorMessage = translation.error;
    })
  }
  ngOnDestroy(): void {
    this.pageTranslationHelper.dispose();
    if(this.projectTranslationHelper) {
      this.projectTranslationHelper.dispose();
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id == null) {
      this.errorFlag = true;
    } else {
      var observer = this.projectsService.projectsObservable.subscribe((data) => {
        this.project = this.projectsService.getProject(this.id!);
        observer.unsubscribe();
        if (this.project) {
          var translationFile = "projects/" + this.id;
          if (this.project.translationFile)
            translationFile = this.project.translationFile;

          this.projectTranslationHelper = new TranslationHelper(translationFile, this.translationService, (translation) => {
            this.name = translation.name;
            this.briefing = translation.briefing;
            this.description = translation.description;
          });
        } else {
          this.errorFlag = true;
        }
      });
      this.project = this.projectsService.getProject(this.id);
    }
  }
}
