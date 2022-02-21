import { Component } from '@angular/core';
import { TranslationHelper } from './helpers/translation-helper';
import { SideNavService } from './services/side-nav.service';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private translationHelper: TranslationHelper;

  openSideNav: boolean;

  about: string = "";
  projects: string = "";

  constructor(private sideNavService: SideNavService, private translationService: TranslationService) {
    this.translationHelper = new TranslationHelper("navbar", translationService, (translation) => {
      this.about = translation.about;
      this.projects = translation.projects;
    });

    this.openSideNav = sideNavService.getState();

    sideNavService.isOpen$.subscribe((s) => {
      this.openSideNav = s;
    })
  }

  closeSideNav() {
    this.sideNavService.setState(false);
  }

}
