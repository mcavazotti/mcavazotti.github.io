import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslationHelper } from 'src/app/helpers/translation-helper';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit, OnDestroy {
  private translationHelper: TranslationHelper;

  notFound: string = "";


  constructor(private translationService: TranslationService) {
    this.translationHelper = new TranslationHelper("not-found", translationService, (translation) => {
      this.notFound = translation.notFound;
    });
  }
  ngOnDestroy(): void {
    this.translationHelper.dispose();
  }

  ngOnInit(): void {
  }

}
