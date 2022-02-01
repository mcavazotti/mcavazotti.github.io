import { Component, OnInit } from '@angular/core';
import { TranslationHelper } from 'src/app/helpers/translation-helper';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  private translationHelper: TranslationHelper;

  about: string = "";
  content:string = "";


  constructor(private translationService: TranslationService) {
    this.translationHelper = new TranslationHelper("about-page", translationService, (translation) => {
      this.about = translation.about;
      this.content = translation.content;
    });
  }

  ngOnInit(): void {
  }

}
