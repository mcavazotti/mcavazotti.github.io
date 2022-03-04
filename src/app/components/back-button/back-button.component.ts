import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslationHelper } from 'src/app/helpers/translation-helper';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit, OnDestroy {
  private translationHelper: TranslationHelper;
  back: string = '';

  constructor(private location: Location, private translationService: TranslationService,) {
    this.translationHelper = new TranslationHelper("back-button", translationService, (translation) => {
      this.back = translation.back;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.translationHelper.dispose();
  }


  goBack() {
    this.location.back();
  }

}
