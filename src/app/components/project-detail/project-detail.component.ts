import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/definitions/project.inteface';
import { TranslationHelper } from 'src/app/helpers/translation-helper';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  private translationHelper?: TranslationHelper;

  @Input() project: Project = {
    id: ''
  };

  name: string = '';
  briefing: string = '';

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    var translationFile = "projects/" + this.project.id;

    if (this.project.translationFile)
      translationFile = this.project.translationFile;

    this.translationHelper = new TranslationHelper(translationFile,this.translationService,(translation)=> {
      this.name = translation.name;
      this.briefing = translation.briefing;
    });
  }

}
