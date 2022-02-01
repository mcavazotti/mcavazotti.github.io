import { Component, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { TranslationHelper } from 'src/app/helpers/translation-helper';
import { SideNavService } from 'src/app/services/side-nav.service';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  openSideNav: boolean;
  
  private translationHelper: TranslationHelper;

  supportedLanguages: string[];
  activeLanguage: string;
  currentRoute: string = '';

  menuIcon = faBars;

  title: string = "";
  about: string = "";
  projects: string = "";

  constructor(private translationService: TranslationService, private router: Router, private sideNavService: SideNavService) {
    this.supportedLanguages = translationService.getSupportedLanguages();
    this.activeLanguage = translationService.getActiveLanguage();

    translationService.activeLanguage.subscribe((lang) => {
      this.activeLanguage = lang;
    });

    this.translationHelper = new TranslationHelper("navbar",translationService,(translation) => {
      this.title = translation.title;
      this.about = translation.about;
      this.projects = translation.projects;
    });

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });

    this.openSideNav = sideNavService.getState();
  }

  ngOnInit(): void {
  }

  changeLanguage(lang: string) {
    this.translationService.setActiveLanguage(lang);
  }

  changeSideNavState() {
    this.openSideNav = !this.openSideNav;
    this.sideNavService.setState(this.openSideNav);
  }
}
