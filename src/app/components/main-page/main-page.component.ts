import { Component, OnInit } from '@angular/core';
import { TranslationHelper } from 'src/app/helpers/translation-helper';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  private translationHelper: TranslationHelper;

  title: string = "";
  about: string = "";
  projects: string = "";


  constructor(private translationService: TranslationService) {
    this.translationHelper = new TranslationHelper("main-page", translationService, (translation) => {
      this.title = translation.title;
      this.about = translation.about;
      this.projects = translation.projects;
    });
  }

  ngOnInit(): void {

  }



}
