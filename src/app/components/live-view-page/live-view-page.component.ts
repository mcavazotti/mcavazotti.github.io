import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TranslationHelper } from 'src/app/helpers/translation-helper';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-live-view-page',
  templateUrl: './live-view-page.component.html',
  styleUrls: ['./live-view-page.component.css']
})
export class LiveViewPageComponent implements OnInit, OnDestroy {
  private translationHelper: TranslationHelper;
  errorMessage: string = '';
  id: string | null = null;

  constructor(private translationService: TranslationService, private route: ActivatedRoute, private domSanitizer: DomSanitizer) {
    this.translationHelper = new TranslationHelper("detail-page", translationService, (translation) => {
      this.errorMessage = translation.error;
    })
   }
  ngOnDestroy(): void {
    this.translationHelper.dispose();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id == null) {
      this.id = '';
    }
  }

  getUrl() : SafeUrl{
    return this.domSanitizer.bypassSecurityTrustResourceUrl('assets/live/' + this.id + '/index.html');
  }
}
