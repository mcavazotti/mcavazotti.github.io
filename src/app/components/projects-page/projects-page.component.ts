import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/definitions/project.inteface';
import { TranslationHelper } from 'src/app/helpers/translation-helper';
import { ProjectsService } from 'src/app/services/projects.service';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {
  private translationHelper: TranslationHelper;

  projects: Project[] = [];

  projectsString: string = '';

  constructor(private translationService: TranslationService, private projectsService: ProjectsService) {
    this.translationHelper = new TranslationHelper("projects-page", translationService, (translation) => {
      this.projectsString = translation.projects;
    });

    var observer = projectsService.projectsObservable.subscribe((data) => {
      this.projects = data;
      observer.unsubscribe();
    });
  }

  ngOnInit(): void {
  }

}
