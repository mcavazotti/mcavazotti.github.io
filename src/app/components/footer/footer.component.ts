import { Component, OnInit } from '@angular/core';
import { faGithubSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { TranslationHelper } from 'src/app/helpers/translation-helper';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private translationHelper: TranslationHelper;

  linkedInIcon = faLinkedin;
  githubIcon = faGithubSquare;
  instagramIcon = faInstagram;

  footerMessage: string = '';


  constructor(private translationService: TranslationService) {
    this.translationHelper = new TranslationHelper("footer", translationService, (translation) => {
      this.footerMessage = translation.message;
    });
  }

  ngOnInit(): void {
  }

}
